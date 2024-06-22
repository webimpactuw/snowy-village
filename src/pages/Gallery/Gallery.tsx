import React, {useState, useEffect} from 'react';
import Header from './Header';
import GalleryGrid from './GalleryGrid';
import { fetchGallery } from "../../../sv-sanity/SanityClient";

interface SanityGalleryImageData {
  _id: string;
  src: {
    asset: {
      _id: string;
      url: string;
    };
  };
  alt: string;
  caption?: string;
  contentType: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<SanityGalleryImageData[]>([]);

  useEffect(() => {
    fetchGallery().then(setImages);
  }, []);

  return (
    <>
      <div className="bg-background-color" style={{ color: "#F0FAFF" }}>
        <Header />
      </div>
      
      <div className='pb-20 bg-text-color-2'>
        <GalleryGrid images={images} />
      </div>
    </>
  );
};

export default Gallery;

// import Image72 from './Image72.png';
// import Image80 from './Image80.png';
// import Image82 from './Image82.png';
// import Image106 from './Image106.png';
// import Image110 from './Image110.png';
// import Image142 from './Image142.png';
// import Image89 from './Image89.png';
// import Image107 from './Image107.png';
// import Image73 from './Image73.png';
// import Image96 from './Image96.png';
// import Image100 from './Image100.png';

// const images = [
//   { src: Image72, className: "", alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
//   { src: Image80, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image82, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
//   { src: Image106, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image110, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image142, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image89, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image107, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
//   { src: Image73, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image96, alt: 'Description of image', caption: 'Strawberry' },
//   { src: Image100, alt: 'Description of image', caption: 'Strawberry' },
// ];