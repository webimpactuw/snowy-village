import Header from './Header';
import GalleryGrid from './GalleryGrid';


const testURL = 'https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg';

const images = [
  { src: 'src/assets/GalleryImages/image 72.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/assets/GalleryImages/image 80.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/assets/GalleryImages/image 82.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/assets/GalleryImages/image 106.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/assets/GalleryImages/image 110.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/assets/GalleryImages/image 82.png', alt: 'Description of image', caption: 'Strawberry' },
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
      
      <div className='pb-20' style={{color: "FFFFFF"}}>
        <GalleryGrid images={images} />
      </div>
    </>
  );
}

export default Gallery;
