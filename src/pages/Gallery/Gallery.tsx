import Header from './Header';
import GalleryGrid from './GalleryGrid';


const testURL = 'https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg';

const images = [
  { src: testURL, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },



];

function Gallery() {
  return (
    <>
      <div className="bg-background-color" style={{color: "F0FAFF"}}>
        <Header />
      </div>
      {/* <div className="mx-auto bg-white">
        <img src="src/assets/GalleryImages/DRIPPPPP.png" alt='dripping'/>
      </div> */}
      <div className='pb-20' style={{color: "FFFFFF"}}>
        <GalleryGrid images={images} />
      </div>
    </>
  );
}

export default Gallery;
