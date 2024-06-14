import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'zh9hwpwm',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-07',
})

export async function getMenuItems(type: string) {
  const items = await client.fetch(`*[_type == "menuitem" && type == "${type}"]`)
  return items
}

export async function getLocations() {
  const locations = await client.fetch('*[_type == "locationitem"]')
  return locations
}

export async function getCarouselImgs() {
  const items = await client.fetch('*[_type == "menucarouselimg"]')
  return items
}

const urlBuilder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return urlBuilder.image(source)
}

export const fetchGallery = async () => {
  const query = `*[_type == "gallery"]{
    src {
      asset->{
        _id,
        url
      }
    },
    alt,
    caption,
    contentType
  }`;
  const images = await client.fetch(query);
  return images.map(img => ({
    src: img.src.asset.url,
    alt: img.alt,
    caption: img.caption,
    contentType: img.contentType,
  }));
}
