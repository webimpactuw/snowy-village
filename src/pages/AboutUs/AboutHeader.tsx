const AboutHeader = () => {
  return (
    <>
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');
        </style>
      </div>
      <div style={{ backgroundColor: '#E8F4FF' }}>
        <div className="mx-auto px-20 pt-20 text-left flex">
          <div className="flex-1">
            <div className="container mx-auto h-16 py-20">
              <h1 className="text-text-color-1 font-fjalla-one font-bold text-center text-5xl" style={{ color: '#00729D' }}>
                ABOUT US
              </h1>
           </div>
            {/* <img src="src/assets/GalleryImages/border.png" alt="border" /> */}
            <h2 style={{ fontFamily: "'Oooh Baby', cursive", color: '#00729D' }}>
              from the village, made with care
            </h2>
          </div>
          <div className="flex-1">
            <img src="src/assets/GalleryImages/DRIPPPPP-3.png" alt="image" />
          </div>
        </div>
        <div className="mx-auto text-center pb-20"></div>
      </div>
    </>
  )
  
  }
  
  
  
  export default AboutHeader;