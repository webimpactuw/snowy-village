// import menuData from "./menu-data.json";
import { ImgMenuItem, RegMenuItem } from "./MenuItem";
import ItemData from "./ItemData";
import {
  getFeaturedMenuItems,
  getMenuItems,
  urlFor,
} from "../../../sv-sanity/SanityClient";

type SanityItemData = {
  _rev: string;
  name: string;
  _updatedAt: string;
  _createdAt: string;
  _type: string;
  containsNuts: boolean;
  isPopular: boolean;
  _id: string;
  type: string;
  img?: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
};

const featured: Array<SanityItemData> = await getFeaturedMenuItems();
const bingsoo: Array<SanityItemData> = await getMenuItems("bingsoo");
const drinks: Array<SanityItemData> = await getMenuItems("drinks");
const taiyaki: Array<SanityItemData> = await getMenuItems("taiyaki");

const menu = new Map<string, Array<SanityItemData>>();
menu.set("bingsoo", bingsoo);
menu.set("drinks", drinks);
menu.set("taiyaki", taiyaki);

export function FeaturedMenuBlock() {
  return (
    <div className="grid">
      <span id="FEATURED" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center font-fjalla-one tracking-wider text-4xl text-[#bc9a6c]">
        FEATURED
      </h2>
      <div className="grid grid-cols-2 px-8 py-4 gap-x-12 gap-y-6">
        {featured.map((item: SanityItemData, i: number) => {
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
}

export function RegularMenuBlock({ name }: { name: string }) {
  return (
    <div className="grid">
      <span id={name} className="block h-10 -mt-10 invisible" />
      <h2 className="text-center font-fjalla-one tracking-wider text-4xl text-[#bc9a6c]">
        {name}
      </h2>
      <div className="grid px-6 py-4 gap-x-12">
        {menu
          .get(name.toLowerCase())
          ?.map((item: SanityItemData, i: number) => {
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
  );
}
