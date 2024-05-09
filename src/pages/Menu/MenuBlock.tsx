import { RegMenuItem } from "./MenuItem";
import ItemData from "./ItemData";
import { getMenuItems } from "../../../sv-sanity/SanityClient";
import { SanityItemData } from "./SanityItemData";
import FeaturedGallery from "./FeaturedGallery";

// const featured: Array<SanityItemData> = await getFeaturedMenuItems();
const bingsoo: Array<SanityItemData> = await getMenuItems("bingsoo");
const drinks: Array<SanityItemData> = await getMenuItems("drink");
const taiyaki: Array<SanityItemData> = await getMenuItems("taiyaki");

const menu = new Map<string, Array<SanityItemData>>();
menu.set("bingsoo", bingsoo);
menu.set("drinks", drinks);
menu.set("taiyaki", taiyaki);

// Currently unused
/**
export function FeaturedMenuBlock() {
  return (
    <div className="grid">
      <span id="FEATURED" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center font-fjalla-one tracking-wider text-4xl text-[#bc9a6c]">
        FEATURED
      </h2>
      <div className="grid grid-cols-2 px-8 py-4 gap-x-12 gap-y-6">
        {featured
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((item: SanityItemData, i: number) => {
            const data: ItemData = {
              name: item.name,
              img: urlFor(item.img).url(),
              type: item.type,
              isPopular: item.isPopular,
              containsNuts: item.containsNuts,
            };
            return <ImgMenuItem key={i} itemData={data} />;
          })}
      </div>
    </div>
  );
} */

export function GalleryMenuBlock({ name }: { name: string }) {
  return (
    <div className="grid">
      <span id={name} className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        {name}
      </h2>
      <FeaturedGallery />
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(0, menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export function ImgMenuBlock({ name, img }: { name: string; img: string }) {
  return (
    <div className="grid">
      <span id={name} className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        {name}
      </h2>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 mx-auto mt-6 flex justify-center p-2 border-4 border-grey rounded-lg">
        <img src={img} className="w-full" />
      </div>
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(0, menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export function RegularMenuBlock({ name }: { name: string }) {
  return (
    <div className="grid">
      <span id={name} className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        {name}
      </h2>
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(0, menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
        <div>
          {menu
            .get(name.toLowerCase())
            ?.slice(menu.get(name.toLowerCase())!.length / 2)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                img: undefined,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <RegMenuItem key={i} itemData={data} />;
            })}
        </div>
      </div>
    </div>
  );
}
