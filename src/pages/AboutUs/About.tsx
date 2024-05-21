import Locations from "./Locations";
import AboutHeader from "./AboutHeader";

export default function About() {
  return <>
    <AboutHeader/>
    <span id="team"/>


      <div className="container mx-auto flex flex-col-reverse md:flex-row">
        <div className="flex-1 lg:pl-20 sm:pt-10 md:pt-20 pb-20 px-10">
          <img src="src/assets/GalleryImages/image 122.png" alt="About us" className="w-full" />
        </div>
        <div className="flex-1">
          <div className="py-20">
            <h1 className="text-center md:text-right text-5xl lg:text-7xl font-bold font-kumbh-sans text-[#00729D] pb-4">
              OUR TEAM
            </h1>
          </div>
          <div className="w-3/4 md:w-full mx-auto md:ml-auto">
            <h2 className="text-center md:text-right text-sm font-light font-kumbh-sans text-dark-blue pb-20 md:pb-40">
              Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. We use only the best ingredients and we source them our from Japan. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in.
            </h2>
          </div>
        </div>
      </div>


    
    
    <span id="story"/>

    <div className="bg-[#E8F4FF]">
    <div className="mx-auto flex">

          <div className="flex-1 sm:pl-10 md:pl-20 pr-20 pt-40 text-left">
            <div className="container mx-auto h-16 py-20">
              <h1 className="text-text-color-1 font-kumbh-sans font-bold text-left text-7xl" style={{ color: '#00729D' }}>
                OUR HISTORY
              </h1>
            </div>

            <div className="container h-16 w-3/4">
              <h2 className="text-dark-blue font-kumbh-sans text-sm font-light" >
              Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. We use only the best ingredients and we source them our from Japan. Did you know? Snowy Village was founded in 1945 by an amazing couple of besties. Did you know? Snowy Village was founded in.
              </h2>
            </div>
          </div>

          <div className="flex-1">
            <img src="src/assets/GalleryImages/history.png" alt="image" />
          </div>
      </div>
    </div>


    <span id="locations"/>
    <Locations />
  </>
}