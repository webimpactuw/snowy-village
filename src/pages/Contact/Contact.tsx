import { useState } from "react";
import EmailForm from "../../components/EmailForm";
import SampleText from "../../components/SampleText";
import HiringImage from "./Hiring.jpg";
import CollabImage from "./Collab.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Contact() {

  // const location: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8333483101565!2d-122.31545112299888!3d47.6682337837186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015057c7a99b3%3A0x47db1e5bf87c1c20!2sSnowy%20Village!5e0!3m2!1sen!2sus!4v1709185060487!5m2!1sen!2sus";
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

      <Link to={{
        pathname: '/contact/hiring'
      }}/>


      <span id="hiring"/>
      <div className="flex flex-col w-full md:pl-[20%] md:pr-[20%] md:p-8 bg-beige">
        <div className="flex">
          <img src={HiringImage} className="w-1/2 p-3"/>
          <div className="p-3">
            <h1 className="text-bold">We're Hiring!</h1>
            <p>Let’s make some sweets, and spread the joys around us. Come join our Village!</p>
          </div>
        </div>

        <p>Want to gain experience with making amazing desserts? We're looking for...</p>
        <button>Apply Now</button>
      </div>


      <span id="collab"/>
      <div className="flex flex-col w-full p-5 bg-ice-blue text-white md:pl-[20%] md:pr-[20%] md:p-8">
        
        <h1>Collab</h1>
        <img src={CollabImage} className="w-1/2 p-3"/>
        <SampleText />

        <div className="mt-3 mb-3">
          <button type="button"
            className={showForm ? "w-full rounded p-2 bg-gray-600" : "rounded p-2 bg-sage-green w-full"}
            onClick={toggleForm}>
            Toggle Contact Form
          </button>
        </div>
        
        <div className={showForm ? "" : "hidden"}>
          <EmailForm />
        </div>

      </div>

      <span id="faq"/>
      <div className="flex flex-col w-full p-5 bg-ice-blue md:pl-[20%] md:pr-[20%] md:p-8">
          <h1>FAQ</h1>
          <div>
            <SampleText />
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
