import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'zh9hwpwm',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-07',
})

export async function getFeaturedMenuItems() {
  const items = await client.fetch('*[_type == "menuitem" && defined(img)]')
  return items
}

export async function getFeaturedOfType(type: string) {
  const items = await client.fetch(`*[_type == "menuitem" && type == "${type}" && defined(img)]`)
  return items
}

export async function getMenuItems(type: string) {
  const items = await client.fetch(`*[_type == "menuitem" && type == "${type}"]`)
  return items
}

export async function getLocations() {
  const locations = await client.fetch('*[_type == "locationitem"]')
  return locations
}

const urlBuilder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return urlBuilder.image(source)
}
