import menuData from "./menu-data.json";
import { ImgMenuItem, RegMenuItem } from "./MenuItem";

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
