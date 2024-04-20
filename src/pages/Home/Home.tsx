// import SampleText from "../../components/SampleText";
import { FirstWave } from "./FirstWave"
import SeveralBingsoos from "./LowSeveralBingsoos.png"
export default function Home() {
  return(
    <>
    {/* <div className="p-20 grid grid-flow-col bg-ice-blue"> */}

    <div className="p-20 flex bg-ice-blue">

        {/* <div className="row-start-1 float-left flex-col grow"> */}
        <div className="flex-col grow">
          
          <div className="flex">
            Welcome to our Dessert Cafe   
          </div>

          <h1 className="flex text-center text-black text-4xl md:text-5xl mb-1 font-bold">
            SNOWY VILLAGE
          </h1>

          <h3 className="flex">
            Small placeholder text here about the cafe. Small placeholder text here about the cafe. Small placeholder text here about the cafe.
          </h3>
        </div>

        <img src={SeveralBingsoos} className="flex w-[50%]"/>

        {/* <img src={SeveralBingsoos} className="col-start-2 w-300"/> */}
    </div>

    <FirstWave />

    <div className="grid">
      whatever 
    </div>

    {/* <div className="p-20 grid justify-center bg-ice-blue">
      <h1 className="text-center text-black text-3xl md:text-4xl mb-1 font-bold">
          We make the best bingsoo!
      </h1>

      <h3>
        Bingsoo is shaved ice, flavored with "text here"
      </h3>

      <img src={heroImage}>

      </img>
    </div> */}
    </>
  );
}
