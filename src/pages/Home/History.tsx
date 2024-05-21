import React from "react";
import KidPicture from "./Kid.png";
import HistoryVector from "./HistoryVector.png";

export default function History() {
  return (
    <div className="">
      <div
        className="relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${HistoryVector})`,
          backgroundSize: "cover", // Ensures the image covers the entire element
          backgroundPosition: "center top", // Moves the image up
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="mx-auto max-w-7xl sm:grid sm:grid-cols-12 sm:gap-x-8 sm:px-8">
          <div className="px-6 pb-40 pt-10 sm:pb-32 sm:col-span-7 sm:px-0 sm:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl sm:mx-0">
              <h1 className="mt-32 text-4xl font-extrabold tracking-tight text-aquamarine-blue sm:mt-10 sm:text-6xl">
                OUR HISTORY
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Did you know? Snowy Village was founded in 1945 by an amazing
                couple of besties. Did you know? Snowy Village was founded in
                1945 by an amazing couple of besties. We use only the best
                ingredients and we source them our from Japan. Did you know?
                Snowy Village was founded in 1945 by an amazing couple of
                besties. Did you know? Snowy Village was founded in.
              </p>
              <div className="mt-2 flex items-center gap-x-6">
                <button className="bg-aquamarine-blue rounded-full text-white px-6 py-3 font-semibold flex justify-center hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className=" invisible sm:visible relative sm:col-span-5 sm:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center h-full">
            <img
              className="justify-self-center   w-52 sm:w-96"
              src={KidPicture}
              alt="kid picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
