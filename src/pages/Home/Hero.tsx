import HeroImage from "./hero_final.png";
import DripImage from "./drip.png";

export default function Hero() {
  return (
    <div className="bg-light-blue pt-24">
      <div className="flex flex-col sm:flex-row bg-light-blue items-center justify-center sm:justify-between sm:gap-10 gap-2 px-4 lg:px-16">
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-aquamarine-blue font-bold text-lg mb-2">
            Welcome to our Dessert Cafe
          </div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-aquamarine-blue text-aquamarine-blue text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-1">
            SNOWY VILLAGE
          </h1>
          <h3 className="text-slate-700 font-normal text-base sm:text-lg mb-4">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for. Lorem ipsum is placeholder text
            commonly used in the.
          </h3>
          <div className="div">
            <button className="bg-aquamarine-blue rounded-full text-white mt-4 px-6 py-3 font-semibold hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <img src={HeroImage} className="max-w-full h-auto" alt="Hero" />
        </div>
      </div>
      <img src={DripImage} alt="" className="bg-[#FFFFFF]" />
    </div>
  );
}
