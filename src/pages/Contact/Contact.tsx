import HiringDots from "./HiringDots.png";
import CollabDots from "./CollabDots.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import FAQs from "./FAQs";

export default function Contact() {

  return <>
    <div className="flex-col items-center bg-ice-blue">

      <Header />  

      </div>

      <Link to={{
        pathname: '/contact/hiring' 
      }}/>

      {/* <WaveComponent /> */}

      {/* <div>
        <img src={WaveImage} />
      </div> */}


      <span id="hiring"/>
      <div className="flex md:w-full flex-col md:pt-10 pb-10 md:pl-[20%] md:pr-[20%] md:p-8 bg-beige">

        <div className="pt-3 hero">
          
            <div className="hero-content flex-col lg:flex-row text-center md:text-justify">
              <img src={HiringDots} className="rounded-lg w-[70%] md:w-[50%]"/>
              
              
              <div className="p-5 pb-0 text-sm md:text-lg md:pl-12">

                <h1 className="text-bold">We're Hiring!</h1>
                <p>Want to gain experience making amazing desert? The requirement are that... write something that you looking for as a employee. 
                  Qualities you look for so that qualify them to work at Snowy Village, 
                  this provides them a bit of knowledge to know what to look for.</p>
                  <button className="btn md:btn-lg bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 hover:bg-green-600 mt-4">Apply Now!</button>
                  </div>
          
              </div>
            </div>
        <p></p>
        
      </div>


      <span id="collab"/>
      <div className="flex flex-col w-full p-5 bg-ice-blue md:pl-[20%] md:pr-[20%] md:p-8 md:pt-12">

        <div className="hero">

          <div className="hero-content flex-col md:flex-row-reverse text-sm md:text-lg">
            <img src={CollabDots} className="rounded-lg w-[70%] md:w-[50%]"/>
        
            <div className="p-5 flex-row text-center md:text-justify md:pr-12">

              <h1>Let's Collab!</h1>

              <p>Something about Snowy Village that catch others to support the business. Write something that make Snowy village a great place to be partner with. 
                How they can be benefit from collaboration</p>

                <div className="mx-auto p-3">
                
                <button className="btn md:btn-lg bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 hover:bg-green-600 mt-4">Collab Form</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span id="faq"/>
      <FAQs />

  </>
}
