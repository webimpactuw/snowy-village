// import SampleText from "../../components/SampleText";
// import { FirstWave } from "./FirstWave"
import EmailForm from "../../components/EmailForm";
// import { IceBlueWave } from "./IceBlueWave"
import LightBlueWave from "./LightBlueWave";
import KidPicture from "./Kid.png";
import SeveralBingsoos from "./SeveralBingsoos.png";
import BeigeDownWave from "./BeigeDownWave";
import BlueUpWave from "./BlueUpWave";
import Locations from "./Locations";
export default function Home() {
  return (
    <>
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

      <LightBlueWave />

      <Locations />

      <div className="pl-20 pr-20 flex bg-beige">
        <div className="flex-start w-[40%] grow">
          <img src={KidPicture} className="flex" />
        </div>

        <div className="mt-100 flex-end flex-shrink text-black mb-1 w-[50%]">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            OUR HISTORY
          </h1>

          <p className="text-right">
            Did you know? Snowy Village was founded in 1945 by an amazing couple
            of besties. Did you know? Snowy Village was founded in 1945 by an
            amazing couple of besties. We use only the best ingredients and we
            source them our from Japan. Did you know? Snowy Village was founded
            in 1945 by an amazing couple of besties. Did you know? Snowy Village
            was founded in.
          </p>
        </div>
      </div>

      <div>
        <BeigeDownWave />
      </div>
      <BlueUpWave />

      <div className="p-20 mt-0 bg-light-blue">
        <h1>INTERESTED IN WORKING WITH US?</h1>
        <EmailForm />
      </div>

      <div>
        <h1>BINGSOO, TAIYAKI, OR REFRESHING DRINKS?</h1>
      </div>

      <div>
        <h1>OUR COMMUNITY</h1>
      </div>
    </>
  );
}
