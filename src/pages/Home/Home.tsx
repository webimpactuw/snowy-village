import BlueUpWave from "./BlueUpWave";
import Locations from "./Locations";
import History from "./History";
import Collab from "./Collab";
import Menu from "./Menu";
import Hero from "./Hero";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Hero />

      <Locations />

      <History />

      <BlueUpWave />
      <Collab />

      <Menu />

      <Gallery />
    </div>
  );
}
