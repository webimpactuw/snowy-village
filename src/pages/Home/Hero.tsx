export default function Hero() {
  return (
    <>
      <div className="bg-light-blue py-24 ">
        <div className="flex flex-col lg:flex-row bg-light-blue items-center justify-center lg:justify-between gap-10 lg:gap-40 pt-14 px-4 lg:px-16">
          <div className="flex flex-col text-center lg:text-left">
            <div className="text-aquamarine-blue font-bold text-lg mb-2">
              Welcome to our Dessert Cafe
            </div>
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-aquamarine-blue text-aquamarine-blue text-4xl sm:text-7xl font-extrabold mb-4 sm:mb-1">
              SNOWY VILLAGE
            </h1>
            <h3 className="text-slate-700 font-normal text-base sm:text-lg mb-4">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for. Lorem ipsum is placeholder
              text commonly used in the.
            </h3>
            <div className="div">
              <button className="bg-aquamarine-blue rounded-full text-white mt-4 px-6 py-3 font-semibold hover:ring-aquamarine-blue hover:bg-blue-100 hover:ring-2 hover:text-aquamarine-blue">
                Order Now
              </button>
            </div>
          </div>
          {/* </div> */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="w-64 h-64 bg-gray-200">placeholder for image</div>
          </div>
          {/* <img src={SeveralBingsoos} className="col-start-2 w-300"/> */}
        </div>
      </div>
    </>
  );
}
