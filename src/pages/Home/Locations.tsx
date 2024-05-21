import React from "react";

const locations = [
  {
    name: "SEATTLE",
    role: "hello",
    imageUrl:
      "https://img.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_181624-1669.jpg?t=st=1715295315~exp=1715298915~hmac=02111784eabe084828801490f7eafd1dc5bc0cd8071b2b07e4febfd2e396319e&w=1800",
  },
  {
    name: "BELLEVUE",
    role: "address",
    imageUrl:
      "https://img.freepik.com/free-photo/abstract-blur-defocused-restaurant-coffee-shop-cafe-interior_1203-9267.jpg?t=st=1715295348~exp=1715298948~hmac=b2777a107c59c584ef5edd3cc00d69d6ef9b7c95dd2d1efae05990efd9b2e333&w=1800",
  },
  {
    name: "AMERICA",
    role: "address",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-cute-asian-woman-barista-cafe-staff-standing-near-counter-with-coffee-machine-wearing-ap_1258-138270.jpg?t=st=1715295380~exp=1715298980~hmac=18b5c5996c867456e0a71698dc68f0a9278675fdbae552d5ed2caacd716b5fbb&w=1800",
  },

  // More location...
];

export default function Locations() {
  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 mt-10">
        <div className="mx-auto max-w-2xl justify-center">
          <h2 className="sm:text-7xl text-4xl tracking-tight text-aquamarine-blue font-extrabold text-center mx-auto">
            <span className="block">OUR</span>
            <span className="block mt-2">LOCATIONS</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg font-normal text-gray-600 mx-auto justify-center text-center">
            Come visit us at our locations below! Come visit us at our locations
            below! Come visit us at our locations below!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2  lg:max-w-none lg:grid-cols-3"
        >
          {locations.map((location) => (
            <li
              key={location.name}
              className="border border-aquamarine-blue p-4 rounded-2xl bg-beige flex flex-col items-center"
            >
              <h3 className="mt-6 text-3xl font-bold leading-8 tracking-tight text-aquamarine-blue mx-auto text-center justify-center mb-4">
                {location.name}
              </h3>
              <img
                className="aspect-[4/2] w-full rounded-2xl object-cover border border-aquamarine-blue opacity-90 hover:opacity-60 transition-opacity duration-100 ease-in-out"
                src={location.imageUrl}
                alt={location.name}
              />
              <p className="text-sm leading-7 text-aquamarine-blue font-semibold text-center mt-4">
                5264 University Way NE, Seattle, WA 98105
              </p>
              <button className="mx-auto bg-aquamarine-blue rounded-full text-white px-4 py-2 font-semibold text-sm flex justify-center hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue mb-4">
                See on Map
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
