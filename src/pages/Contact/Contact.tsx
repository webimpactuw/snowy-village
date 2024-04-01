import EmailForm from "../../components/EmailForm";
import SampleText from "../../components/SampleText";
import HeroImage from "./contact.jpg";

export default function Contact() {

  const location: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8333483101565!2d-122.31545112299888!3d47.6682337837186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015057c7a99b3%3A0x47db1e5bf87c1c20!2sSnowy%20Village!5e0!3m2!1sen!2sus!4v1709185060487!5m2!1sen!2sus";
  
  return <div className="flex-col items-center">
    
    {/* Hero section */}
    {/*  */}
    <div className="flex w-full h-25 text-white mx-auto">
      <img src={HeroImage} className="w-full bg-blend-darken" style={{filter: "brightness(50%)"}}/>
      <h1 className="text-4xl font-semibold p-3 md:text-6xl fixed left-1/5">CONTACT US</h1>
      
    </div>
    
    <div className="flex flex-col w-full p-5">
      <h1>FAQ</h1>

      <div>
        <SampleText />
      </div>
  
    </div>

    <div className="flex flex-col w-full p-5 bg-dark-navy text-white">
    <h1>Collab</h1>
    <SampleText />
    <EmailForm />
    </div>

    <div className="flex-col">
      <h1>Location</h1>

      <div>

      Address: 5264 University Way NE, Seattle, WA 98105
      </div>

      <iframe src={location} className="w-full aspect-square md:w-1/3"></iframe>
    </div>
    
   

  

  </div>;
}
