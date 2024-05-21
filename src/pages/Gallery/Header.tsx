import Border from 'Border.png';

const Header = () => {
  return (
    <>
      
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');
        </style>
      </div>
      <div className="container mx-auto h-16 w-3/4 pt-20">
          <h1 className="text-text-color-1 font-kumbh-sans font-bold text-center text-5xl lg:text-7xl" style={{ color: '#00729D' }}>GALLERY</h1>
      </div>
      <div className="mx-auto px-20 pt-20">
        <img src='/Users/lezhiliu/Desktop/snowy-village/src/pages/Gallery/Border.png' alt='border'/>
      </div>
      <div className="mx-auto text-center pb-20">
        <h2 className="" style={{ fontFamily: "'Oooh Baby', cursive", color: '#00729D' }} >from the village, made with care</h2>
      </div>
    </>
  )
}



export default Header;