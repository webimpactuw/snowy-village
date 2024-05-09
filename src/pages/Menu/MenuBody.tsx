import { RegularMenuBlock, GalleryMenuBlock, ImgMenuBlock } from "./MenuBlock";
import HeartSVG from "./HeartSVG";
import NutSVG from "./NutSVG";

export default function MenuBody() {
  return (
    <div className="bg-[#ffffff] grid justify-center">
      <div className="grid grid-flow-col m-1 justify-center">
        <div className="flex items-center justify-center w-fit p-2">
          <HeartSVG width="3" />
          <p className="text-center text-dark-blue text-xs tracking-widest p-1">
            = popular
          </p>
        </div>
        <div className="flex items-center justify-center w-fit p-2">
          <NutSVG width="3" />
          <p className="text-center text-dark-blue text-xs tracking-widest p-1">
            = contains nuts
          </p>
        </div>
      </div>
      <div className="grid gap-y-4">
        <GalleryMenuBlock name="BINGSOO" />
        <ImgMenuBlock name="TAIYAKI" img="taiyaki.jpg" />
        <RegularMenuBlock name="DRINKS" />
      </div>
    </div>
  );
}
