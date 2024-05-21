import BlueWave1 from "./blue_wave_1.png";

function Menu() {
  return (
    <div className="div">
      <img src="{BlueWave1}" alt="" />
      <div className="flex justify-center bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 mt-10">
          <div className="mx-auto max-w-2xl justify-center">
            <h2 className="sm:text-5xl text-4xl tracking-wide text-aquamarine-blue font-extrabold text-center mx-auto mt-8">
              BINGSOO, TAIYAKI, OR REFRESHING DRINKS?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
