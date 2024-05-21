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
    <>
      <div className="bg-[#ffffff]">
        <Hero />
        <LightBlueWave />

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
