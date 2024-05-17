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
    <div className="grid p-2 md:mb-6">
      <span id="BINGSOO" className="block h-10 -mt-10 invisible" />
      <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 m-auto md:justify-center md:gap-6">
        <div className="w-3/4 m-auto">
          <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
            BINGSOO
          </h2>
          <FeaturedGallery />
        </div>
        <div className="grid px-4 py-4 grid-cols-3 justify-items-center align-center md:w-3/4">
          <div className="grid justify-center content-start">
            <h3 className="text-md tracking-wider text-[#00729d] text-center font-bold underline underline-offset-4 decoration-2 decoration-gray-300 my-2">
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
          <div className="bg-gray-300 w-0.5 mt-10"></div>
          <div className="grid justify-center content-start">
            <h3 className="text-md tracking-wider text-center text-[#00729d] font-bold underline underline-offset-4 decoration-2 decoration-gray-300 my-2">
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
    </div>
  );
}

export function TaiyakiMenuBlock() {
  return (
    <div className="grid p-2 md:mb-6">
      <span id="TAIYAKI" className="block h-10 -mt-10 invisible" />
      <div className="flex flex-col md:flex-row-reverse w-11/12 md:w-3/4 m-auto md:justify-center md:gap-6">
        <div className="w-3/4 m-auto">
          <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
            TAIYAKI
          </h2>
          <div className="w-full mx-auto -mt-4 -mb-4 md:-mt-16 md:-mb-8 justify-center">
            <img src="taiyaki.png" className="" />
          </div>
        </div>
        <div className="grid px-4 py-4 grid-cols-3 justify-items-center align-center md:w-3/4">
          <div className="grid justify-center content-start">
            <h3 className="text-md tracking-wider text-center text-[#00729d] font-bold underline underline-offset-4 decoration-2 decoration-gray-300 my-2">
              SWEET
            </h3>
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
          <div className="bg-gray-300 w-0.5 mt-10"></div>
          <div className="grid justify-center content-start">
            <h3 className="text-md tracking-wider text-center text-[#00729d] font-bold underline underline-offset-4 decoration-2 decoration-gray-300 my-2">
              SAVORY
            </h3>
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
    </div>
  );
}

export function DrinksMenuBlock() {
  return (
    <div className="grid p-2 w-11/12 md:w-1/2 m-auto md:mb-6">
      <span id="DRINKS" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        DRINKS
      </h2>
      <div className="grid px-4 py-4 grid-cols-3 justify-items-center align-center">
        <div className="grid justify-center content-start">
          {drinks
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(drinks.length / 2)
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
        <div className="bg-gray-300 w-0.5"></div>
        <div className="grid justify-center content-start">
          {drinks
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, drinks.length / 2)
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

export function AddonsMenuBlock() {
  return (
    <div className="grid p-2 w-11/12 md:w-1/2 m-auto md:mb-6">
      <span id="ADDONS" className="block h-10 -mt-10 invisible" />
      <h2 className="text-center tracking-wider text-4xl text-[#00729d]">
        ADD-ONS
      </h2>
      <div className="grid px-4 py-4 grid-cols-3 justify-items-center align-center">
        <div className="grid justify-center content-start">
          {addons
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(addons.length / 2)
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
        <div className="bg-gray-300 w-0.5"></div>
        <div className="grid justify-center content-start">
          {addons
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, addons.length / 2)
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
