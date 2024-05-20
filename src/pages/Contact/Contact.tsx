import { useState } from "react";
import EmailForm from "../../components/EmailForm";
import HiringDots from "./HiringDots.png";
import CollabDots from "./CollabDots.png";
import Header from "./Header";
import { Link } from "react-router-dom";
// import WaveImage from "./waves.png";
// import FaqImage1 from "./faq-1.png";
// import FaqImage2 from "./faq-2.png";
// import TrueImage from "./true.png";
// import WaveComponent from "./WaveComponent";

export default function Contact() {

  const [showForm, setShowForm] = useState(false);
  // const [formButtonText, setFormButtonText] = useState("Show contact form");

  const toggleForm = (): void => {
    // if(showForm) {
    //   setFormButtonText("Hide contact form");
    // } else {
    //   setFormButtonText("Show contact form");
    // }
    setShowForm(!showForm);
  }



  return <>
    {/* <AppLayout> */}
      <div className="flex-col items-center bg-ice-blue">

        <Header />  



        <div className="bg-header-pattern" style={{backgroundImage: "url('./waves.png')"}}>
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>  

        <div>

          Whatever header

          <div
            className=""
          >

          </div>

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
          
          <div className="w-[65%] flex items-center p-3 mx-auto">
            
          </div>


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
        <div className="flex flex-col w-full p-5 bg-ice-blue md:pl-[20%] md:pr-[20%] md:p-8">
          
          <div className="hero">

          <div className="hero-content flex-col md:flex-row-reverse text-sm md:text-lg">

          <img src={CollabDots} className="rounded-lg w-[70%] md:w-[50%]"/>
            
            <div className="p-5 flex-row text-center md:text-justify md:pr-12">

              <h1>Let's Collab! </h1>

              <p>Something about Snowy Village that catch others to support the business. Write something that make Snowy village a great place to be partner with. 
                How they can be benefit from collaboration</p>

                <div className="mx-auto p-3">
                <button
                  className={showForm ? "btn md:btn-lg w-full rounded-full p-2 text-white bg-green-600 active:bg-green-600 font-bold" :  
                      "btn md:btn-lg bg-aquamarine-blue active:bg-green-600 text-white font-bold rounded-full p-3 text"}
                  onClick={toggleForm}>
                  Contact Form
                </button>
              </div>

              <div className={showForm ? "w-full" : "hidden"}>
                <EmailForm />
              </div>
            </div>
          </div>

          </div>

          
        </div>

        <span id="faq"/>
        <div className="flex-col hero w-full p-5 pt-10 bg-beige md:pl-[20%] md:pr-[20%] md:p-8 text-center">

            {/* <div className="flex justify-start">
                <img src={FaqImage1} className="rounded-lg w-[30%] md:w-[30%] absolute left-[50%] z-150"/>
              
                <img src={FaqImage2} className="rounded-lg w-[30%] md:w-[30%] absolute bottom-[22%] left-[40%] z-200"/>
            </div> */}

            <div className="hero-content flex-col">

            
            {/* <img src={TrueImage} className="rounded-lg w-[50%] md:w-[50%] justify-center"/> */}

            <div className="flex-col">
            <h1>FAQ's</h1>

            <p className="text-sm md:text-lg">Having questions about our village? The following are questions that get asked most.</p>

            <button className="btn md:btn-lg bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 text-md hover:bg-green-600 mt-4">Read more..</button>

            <div tabIndex={0} className="collapse collapse-arrow bg-ice-blue mt-5 outline outline-blue-300">
            <input type="checkbox" name="my-accordion-1" defaultChecked/> 
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content"> 
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-arrow outline outline-blue-300 bg-ice-blue mt-5">
              <input type="checkbox" name="my-accordion-1" /> 
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
            </div>
        </div>
        </div>
        
      </div>
    </>
    ;
}
