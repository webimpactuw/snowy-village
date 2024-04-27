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
      <div className="bg-background-color">
        <Header />
      </div>
      <div className='bg-white pb-20'>
        <GalleryGrid images={images} />
      </div>
    </>
  );
}

export default Gallery;
