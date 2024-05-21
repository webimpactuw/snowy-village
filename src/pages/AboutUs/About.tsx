import Locations from "./Locations";
import AboutHeader from "./AboutHeader";

export default function About() {
  return (
    <>
      <span id="about-top" className="block h-20 -mt-20 invisible" />
      <AboutHeader />
      <span id="team" className="block h-20 -mt-20 invisible" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row">
        <div className="flex-1 lg:pr-40 sm:pt-10 md:pt-20 pb-20 px-10">
          <img
            src="src/pages/AboutUs/image 122.png"
            alt="About us"
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <div className="py-20">
            <h1 className="text-center md:text-right text-5xl lg:text-7xl font-bold font-kumbh-sans text-[#00729D] pb-4">
              OUR TEAM
            </h1>
          </div>
          <div className="w-3/4 md:w-full mx-auto md:ml-auto">
            <h2 className="text-center md:text-right text-sm font-light font-kumbh-sans text-dark-blue pb-20 md:pb-40">
              Did you know? Snowy Village was founded in 1945 by an amazing
              couple of besties. Did you know? Snowy Village was founded in 1945
              by an amazing couple of besties. We use only the best ingredients
              and we source them our from Japan. Did you know? Snowy Village was
              founded in 1945 by an amazing couple of besties. Did you know?
              Snowy Village was founded in.
            </h2>
          </div>
        </div>
      </div>

      <span id="story" className="block h-20 -mt-20 invisible" />

      <div className="bg-[#E8F4FF]">
        <div className="mx-auto flex flex-col md:flex-row">
          <div className="flex-1 pl-20 md:pl-30 pr-20 pt-10 md:pt-25 lg:pt-40 md:text-left text-center">
            <div className="mx-auto h-16 pt-20 pb-20">
              <h1
                className="font-kumbh-sans font-bold text-center md:text-left text-5xl lg:text-7xl"
                style={{ color: "#00729D" }}
              >
                OUR HISTORY
              </h1>
            </div>

            <div className="container w-full md:w-3/4">
              <h2 className="text-dark-blue font-kumbh-sans text-sm font-light">
                Did you know? Snowy Village was founded in 1945 by an amazing
                couple of besties. Did you know? Snowy Village was founded in
                1945 by an amazing couple of besties. We use only the best
                ingredients and we source them our from Japan. Did you know?
                Snowy Village was founded in 1945 by an amazing couple of
                besties. Did you know? Snowy Village was founded in.
              </h2>
            </div>
          </div>

          <div className="flex-1">
            <img src="src/pages/AboutUs/history.png" alt="image" />
          </div>
        </div>
      </div>

      <span id="locations" />
      <Locations />
    </>
  );
}
