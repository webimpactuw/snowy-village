import { useState } from "react";
import EmailForm from "../../components/EmailForm";
import HiringImage from "./Hiring.jpg";
import CollabImage from "./Collab.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
import WaveImage from "./waves.png";

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



  return <div className="flex-col items-center bg-ice-blue">

      <Header />  

      {/* <div className="hero bg-base-200 bg-[url('/waves.png')]" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>   */}

      <Link to={{
        pathname: '/contact/hiring' 
      }}/>


      <span id="hiring"/>
      <div className="flex md:w-full flex-col pt-10 pb-10 md:pl-[20%] md:pr-[20%] md:p-8 bg-beige">
        
        <div className="w-[65%] flex items-center p-3 mx-auto">
          
        </div>


        <div className="pt-3 hero">
          
            <div className="hero-content flex-col lg:flex-row text-center md:text-justify">
              <img src={HiringImage} className="rounded-lg w-[64%] md:w-[100%]"/>
              
              
              <div className="p-5 pb-0 text-sm">

                <h1 className="text-bold">We're Hiring!</h1>
                <p>Want to gain experience making amazing desert? The requirement are that... write something that you looking for as a employee. 
                  Qualities you look for so that qualify them to work at Snowy Village, 
                  this provides them a bit of knowledge to know what to look for.</p>
                  <button className="btn bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 text-md hover:bg-green-600 mt-4">Apply Now!</button>
                  </div>
          
              </div>
            </div>
        <p></p>
        
      </div>


      <span id="collab"/>
      <div className="flex flex-col w-full p-5 bg-ice-blue md:pl-[20%] md:pr-[20%] md:p-8">
        
        <div className="hero">

        <div className="hero-content flex-col md:flex-row-reverse">

        <img src={CollabImage} className="rounded-lg w-[70%] md:w-[100%]"/>
          
          <div className="p-5 flex-row text-center md:text-justify text-sm">

            <h1>Let's Collab! </h1>

            <p>Something about Snowy Village that catch others to support the business. Write something that make Snowy village a great place to be partner with. 
              How they can be benefit from collaboration</p>

              <div className="mx-auto p-3">
              <button
                className={showForm ? "btn w-full rounded-full p-3 text-white bg-green-600 active:bg-green-600 font-bold" :  
                    "btn bg-aquamarine-blue active:bg-green-600 text-white font-bold rounded-full p-3"}
                onClick={toggleForm}>
                Toggle Contact Form
              </button>
            </div>

            <div className={showForm ? "w-full" : "hidden"}>
              <EmailForm />
            </div>
          </div>

            {/* <div className={showForm ? "hidden" : ""}> */}
          
          {/* </div> */}
        </div>

        </div>

        
      </div>

      {/* <div className=" bg-beige w-full p-5 bg-beige md:pl-[20%] md:pr-[20%] md:p-8">
        <div className="">
        <EmailForm />
        </div>
      </div> */}

      <span id="faq"/>
      <div className="flex flex-col w-full p-5 pt-10 bg-beige md:pl-[20%] md:pr-[20%] md:p-8 text-center">
          <h1>FAQ's</h1>

          <p className="text-sm text-aquamarine-blue">Having questions about our village? The following are questions that get asked most.</p>

          <button className="btn bg-aquamarine-blue rounded-full font-bold text-white mx-auto p-3 text-md hover:bg-green-600 mt-4">Read more..</button>

          <div className="collapse collapse-arrow bg-base-200 mt-5">
          <input type="checkbox" name="my-accordion-1"/> 
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mt-5">
            <input type="checkbox" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
          </div>
      </div>
      </div>
        
      {/* <div className="flex-col bg-dark-blue md:pl-[20%] md:pr-[20%] text-white">
        <h1>Location</h1>

        <div>

        Address: 5264 University Way NE, Seattle, WA 98105
        </div>
      </div> */}
      
    </div>
    ;
}
