import { FeaturedMenuBlock, RegularMenuBlock } from "./MenuBlock";
import HeartSVG from "./HeartSVG";
import NutSVG from "./NutSVG";

export default function MenuBody() {
  return (
    <div className="bg-ice-blue grid justify-center">
      <div className="grid grid-flow-col m-1 justify-center">
        <div className="flex items-center justify-center w-fit p-2">
          <HeartSVG width="3" />
          <p className="text-center text-dark-blue font-fjalla-one text-2xs tracking-widest font-thin p-1">
            = popular
          </p>
        </div>
        <div className="flex items-center justify-center w-fit p-2">
          <NutSVG width="3" />
          <p className="text-center text-dark-blue font-fjalla-one text-2xs tracking-widest font-thin p-1">
            = contains nuts
          </p>
        </div>
      </div>
      <div className="grid gap-y-4">
        <FeaturedMenuBlock />
        <RegularMenuBlock name="BINGSOO" />
        <RegularMenuBlock name="TAIYAKI" />
        <RegularMenuBlock name="DRINKS" />
      </div>
    </div>
  );
}
