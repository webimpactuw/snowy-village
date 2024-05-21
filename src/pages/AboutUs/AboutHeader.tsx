const AboutHeader = () => {
  return (
    <>
      <div style={{ backgroundColor: '#E8F4FF' }}>
        <div className="bg-[#E8F4FF]">
          <div className="container mx-auto flex flex-col md:flex-row">

            <div className="flex-1 pl-20 md:pl-30 pr-20 pt-10 md:pt-25 lg:pt-40 md:text-left text-center">
              <div className="mx-auto h-16 pt-20 pb-20">
                <h1 className="font-kumbh-sans font-bold text-center md:text-left text-5xl lg:text-7xl" style={{ color: '#00729D' }}>
                  ABOUT US
                </h1>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-dark-blue font-kumbh-sans text-sm font-light">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for.
                </h2>
              </div>
            </div>

            <div className="flex-1">
              <img src="src/pages/AboutUs/cover.png" alt="image" className="w-full" />
            </div>
          </div>
          <div className="mx-auto pb-10"></div>
        </div>
      </div>
    </>
  )
  
  }
  
  
  
  export default AboutHeader;