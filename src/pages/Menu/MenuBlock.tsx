import ItemData from "./ItemData";
import MenuItem from "./MenuItem";

export default function MenuBlock({
  name,
  blockData,
}: {
  name: string;
  blockData: Array<ItemData>;
}) {
  return (
    <div className="grid">
      <span id={name} className="block h-8 -mt-8 invisible" />
      <h2 className="text-center font-fjalla-one tracking-wider text-4xl text-[#bc9a6c]">
        {name}
      </h2>
      <h3 className="text-center font-fjalla-one text-3xs tracking-widest">
        (single | regular | large)
      </h3>
      <div className="grid grid-cols-2 px-8 py-4 gap-x-12 gap-y-6">
        {blockData.map((item) => (
          <MenuItem itemData={item} />
        ))}
      </div>
    </div>
  );
}
