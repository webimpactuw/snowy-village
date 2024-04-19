import menuData from "./menu-data.json";
import { ImgMenuItem, RegMenuItem } from "./MenuItem";
import ItemData from "./ItemData";
import { getFeaturedMenuItems, urlFor } from "../../../sv-sanity/SanityClient";

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
  img: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
};

const featured: Array<SanityItemData> = await getFeaturedMenuItems();
// const bingsoo: Array<SanityItemData> = await getMenuItems("bingsoo");
// const drinks: Array<SanityItemData> = await getMenuItems("drinks");
// const taiyaki: Array<SanityItemData> = await getMenuItems("taiyaki");

export function FeaturedMenuBlock() {
  return (
    <div className="grid">
      <span id="FEATURED" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center font-fjalla-one tracking-wider text-4xl text-[#bc9a6c]">
        FEATURED
      </h2>
      <div className="grid grid-cols-2 px-8 py-4 gap-x-12 gap-y-6">
        {menuData.items.map((item) =>
          item.img !== undefined ? <ImgMenuItem itemData={item} /> : false
        )}
      </div>
      <div>
        {featured.map((item) => {
          const data: ItemData = {
            name: item.name,
            img: urlFor(item.img).url(),
            type: item.type,
            isPopular: item.isPopular,
            containsNuts: item.containsNuts,
          };
          return <ImgMenuItem itemData={data} />;
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
        {menuData.items.map((item) =>
          item.type === name.toLowerCase() ? (
            <RegMenuItem itemData={item} />
          ) : (
            false
          )
        )}
      </div>
    </div>
  );
}
