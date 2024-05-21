import BlueWave1 from "./blue_wave_1.png";
import Bingsoo from "./bingsoo.png";
import Taiyaki from "./taiyaki.png";
import Drinks from "./drinks.png";
import BlueWave2 from "./blue_wave_2.png";

function Menu() {
  return (
    <div>
      <img src={BlueWave1} alt="" className="w-full" />
      <div className="flex justify-center ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 mt-10">
          <div className="mx-auto max-w-2xl justify-center">
            <h2 className="md:text-5xl text-3xl  tracking-wide text-aquamarine-blue font-extrabold text-center mx-auto mt-8">
              BINGSOO, TAIYAKI, OR REFRESHING DRINKS?
            </h2>
            <div className="flex justify-center mt-8 space-x-8">
              <div className="flex flex-col items-center">
                <img src={Drinks} alt="Drinks" className="w-96 h-auto" />
              </div>
              <div className="flex flex-col items-center">
                <img src={Bingsoo} alt="Bingsoo" className="w-96 h-auto" />
              </div>
              <div className="flex flex-col items-center">
                <img src={Taiyaki} alt="Taiyaki" className="w-96 h-auto" />
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button className="bg-[#FF3008] text-white rounded-full mt-4 px-12 py-3 font-semibold hover:bg-red-100 hover:ring-2 hover:ring-[#FF3008] hover:text-[#FF3008]">
                Order on Doordash
              </button>
              <button className="bg-aquamarine-blue rounded-full  text-white mt-4 px-12 py-3 font-semibold flex justify-center hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue">
                Take Me to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={BlueWave2} alt="" className="w-full" />
    </div>
  );
}

export default Menu;
