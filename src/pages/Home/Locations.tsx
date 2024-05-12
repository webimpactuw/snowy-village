const people = [
  {
    name: "SEATTLE",
    role: "address",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "BELLEVUE",
    role: "address",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "AMERICA",
    role: "address",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];

export default function Locations() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-6">
        <div className="mx-auto max-w-2xl  justify-center">
          <h2 className="text-7xl  tracking-tight text-aquamarine-blue font-extrabold text-center mx-auto">
            OUR LOCATIONS
          </h2>
          <p className="mt-6 text-xl font-normal leading-8 text-gray-600 mx-auto justify-center text-center">
            Come visit us at our locations below! Come visit us at our locations
            below! Come visit us at our locations below!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="border-2 border-gray-300 p-4 rounded-xl bg-beige"
            >
              <h3 className="mt-6 text-3xl font-bold leading-8 tracking-tight text-aquamarine-blue mx-auto text-center justify-center mb-4">
                {person.name}
              </h3>
              <img
                className="aspect-[4/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
              />

              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    // href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                  </a>
                </li>
                <li>
                  <a
                    // href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  ></a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
