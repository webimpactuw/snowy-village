import HeartSVG from "./HeartSVG";
import NutSVG from "./NutSVG";
import ItemData from "./ItemData";

export default function MenuItem({ itemData }: { itemData: ItemData }) {
  return (
    <div className="grid">
      <img src={itemData.img} alt={itemData.name} />
      <div className="grid grid-flow-col justify-center gap-2 items-center p-1">
        <p className="font-fjalla-one text-sm tracking-wider text-dark-navy">
          {itemData.name}
        </p>
        {itemData.isPopular && <HeartSVG width="3" />}
        {itemData.containsNuts && <NutSVG width="3" />}
      </div>
    </div>
  );
}
