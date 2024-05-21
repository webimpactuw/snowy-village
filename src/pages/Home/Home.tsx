import LightBlueWave from "./LightBlueWave";

import BeigeDownWave from "./BeigeDownWave";
import BlueUpWave from "./BlueUpWave";
import Locations from "./Locations";
import History from "./History";
import Hero from "./Hero";
import Collab from "./Collab";
import Menu from "./Menu";
export default function Home() {
  return (
    <div className="">
      {/* <div className="p-20 grid grid-flow-col bg-ice-blue"> */}

      <div className="flex bg-light-blue items-center justify-items-center gap-40 pt-14">
        {/* <div className="row-start-1 float-left flex-col grow"> */}
        <div className="flex-col ml-16 ">
          <div className="flex text-aquamarine-blue font-bold text-lg">
            Welcome to our Dessert Cafe
          </div>

          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-aquamarine-blue  flex text-center text-aquamarine-blue text-7xl mb-1 font-extrabold mt-2">
            SNOWY VILLAGE
          </h1>

          <h3 className="flex-end text-slate-700 font-normal text-lg">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for. Lorem ipsum is placeholder text
            commonly used in the.
          </h3>

          <button className="bg-aquamarine-blue rounded-full text-white mt-4 px-6 py-3 font-semibold flex justify-center hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue">
            Order Now
          </button>
        </div>

        {/* <div className="flex-end w-100"> */}
        <img src={SeveralBingsoos} className="" />
        {/* </div> */}

        {/* <img src={SeveralBingsoos} className="col-start-2 w-300"/> */}
      </div>

        <Locations />

        <History />

        <BlueUpWave />
        <Collab />

        <Menu />

        <div>
          <h1>OUR COMMUNITY</h1>
        </div>
      </div>
    </>
  );
}
