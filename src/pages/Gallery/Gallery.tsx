import Header from './Header';
import GalleryGrid from './GalleryGrid';

const images = [
  { src: 'src/pages/Gallery/GalleryImages/image 72.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image 80.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 82.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image 106.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 110.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 142.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 89.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 107.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image 73.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 96.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image 100.png', alt: 'Description of image', caption: 'Strawberry' },

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
