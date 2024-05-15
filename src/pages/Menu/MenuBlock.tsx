import { MenuItem } from "./MenuItem";
import ItemData from "./ItemData";
import { getMenuItems } from "../../../sv-sanity/SanityClient";
import { SanityItemData } from "./SanityItemData";
import FeaturedGallery from "./FeaturedGallery";

const bingsoofruits: Array<SanityItemData> =
  await getMenuItems("bingsoofruits");
const bingsooclassics: Array<SanityItemData> =
  await getMenuItems("bingsooclassics");
const taiyakisweet: Array<SanityItemData> = await getMenuItems("taiyakisweet");
const taiyakisavory: Array<SanityItemData> =
  await getMenuItems("taiyakisavory");
const drinks: Array<SanityItemData> = await getMenuItems("drinks");
const addons: Array<SanityItemData> = await getMenuItems("addons");

export function BingsooMenuBlock() {
  return (
    <div className="grid">
      <span id="BINGSOO" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        BINGSOO
      </h2>
      <FeaturedGallery />
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        <div className="grid justify-center content-start">
          <h3 className="text-md tracking-wider text-[#00729d] text-center font-bold">
            FRUITS
          </h3>
          {bingsoofruits
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <MenuItem key={i} itemData={data} />;
            })}
        </div>
        <div className="grid justify-center content-start">
          <h3 className="text-md tracking-wider text-center text-[#00729d] font-bold">
            CLASSICS
          </h3>
          {bingsooclassics
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <MenuItem key={i} itemData={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export function TaiyakiMenuBlock() {
  return (
    <div className="grid">
      <span id="TAIYAKI" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        TAIYAKI
      </h2>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 mx-auto mt-6 flex justify-center p-2">
        <img src="taiyaki.jpg" className="w-full" />
      </div>
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        <div>
          {taiyakisweet
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <MenuItem key={i} itemData={data} />;
            })}
        </div>
        <div>
          {taiyakisavory
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item: SanityItemData, i: number) => {
              const data: ItemData = {
                name: item.name,
                type: item.type,
                isPopular: item.isPopular,
                containsNuts: item.containsNuts,
              };
              return <MenuItem key={i} itemData={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export function DrinksMenuBlock() {
  return (
    <div className="grid">
      <span id="DRINKS" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        DRINKS
      </h2>
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        {drinks
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item: SanityItemData, i: number) => {
            const data: ItemData = {
              name: item.name,
              type: item.type,
              isPopular: item.isPopular,
              containsNuts: item.containsNuts,
            };
            return <MenuItem key={i} itemData={data} />;
          })}
      </div>
    </div>
  );
}

export function AddonsMenuBlock() {
  return (
    <div className="grid">
      <span id="ADDONS" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        ADD-ONS
      </h2>
      <div className="grid px-4 py-4 gap-x-4 grid-cols-2">
        {addons
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item: SanityItemData, i: number) => {
            const data: ItemData = {
              name: item.name,
              type: item.type,
              isPopular: item.isPopular,
              containsNuts: item.containsNuts,
            };
            return <MenuItem key={i} itemData={data} />;
          })}
      </div>
    </div>
  );
}
