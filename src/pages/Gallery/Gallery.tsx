import Header from './Header';
import GalleryGrid from './GalleryGrid';

const images = [
  { src: require('src/pages/Gallery/GalleryImages/Image72.png'), alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image80.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image82.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image106.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image110.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image142.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image89.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image107.png', alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: 'src/pages/Gallery/GalleryImages/image73.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image96.png', alt: 'Description of image', caption: 'Strawberry' },
  { src: 'src/pages/Gallery/GalleryImages/image100.png', alt: 'Description of image', caption: 'Strawberry' },

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
