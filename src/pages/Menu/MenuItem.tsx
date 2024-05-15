import HeartSVG from "./HeartSVG";
import NutSVG from "./NutSVG";
import ItemData from "./ItemData";

export function MenuItem({ itemData }: { itemData: ItemData }) {
  return (
    <div className="grid grid-flow-col gap-2 justify-start items-center p-1">
      <p className="text-md tracking-wider text-[#00729d] font-bold">
        {itemData.name}
      </p>
      {itemData.isPopular && <HeartSVG width="3" />}
      {itemData.containsNuts && <NutSVG width="3" />}
    </div>
  );
}
