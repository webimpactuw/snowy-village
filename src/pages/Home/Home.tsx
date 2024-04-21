// import SampleText from "../../components/SampleText";
// import { FirstWave } from "./FirstWave"
import EmailForm from "../../components/EmailForm";
// import { IceBlueWave } from "./IceBlueWave"
import LightBlueWave from "./LightBlueWave"
import KidPicture from "./Kid.png"
import SeveralBingsoos from "./SeveralBingsoos.png"
export default function Home() {
  return(
    <>
    {/* <div className="p-20 grid grid-flow-col bg-ice-blue"> */}

    <div className="pl-20 pt-20 pr-20 flex bg-light-blue items-center justify-items-center">

        {/* <div className="row-start-1 float-left flex-col grow"> */}
        <div className="flex-col md:w-[30%] p-0">
          
          <div className="flex">
            Welcome to our Dessert Cafe   
          </div>

          <h1 className="flex text-center  text-aquamarine-blue text-4xl md:text-5xl mb-1 font-bold">
            SNOWY VILLAGE
          </h1>

          <h3 className="flex-end">
            Small placeholder text here about the cafe. Small placeholder text here about the cafe. Small placeholder text here about the cafe.
          </h3>

          <button className="bg-aquamarine-blue m-5 rounded-full text-white p-3 font-bold flex justify-center">Order Now</button>
        </div>

        {/* <div className="flex-end w-100"> */}
          <img src={SeveralBingsoos} className="w-150" width="40%"/>
        {/* </div> */}

        

        {/* <img src={SeveralBingsoos} className="col-start-2 w-300"/> */}
    </div>

    <LightBlueWave />

    <div className="pl-20 pr-20 pt-0 mt-0 flex">

      <div className="flex-start w-[40%] grow">
        <img src={KidPicture} className="flex"/>
      </div>

      <div className="mt-100 flex-end flex-shrink text-black mb-1 w-[50%]">
          <h1 className="text-3xl md:text-4xl font-bold text-center">OUR HISTORY</h1>

          <p className="text-right">Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. We use only the best ingredients and we source them our from Japan. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in.</p>
      </div>
    </div>

    <div className="p-20">
      <h1>INTERESTED IN WORKING WITH US?</h1>

      <EmailForm />
    </div>
    </>
  );
}
