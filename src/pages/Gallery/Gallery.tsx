import React from 'react';
import Header from './Header';
import GalleryGrid from './GalleryGrid';

import Image72 from 'src/pages/Gallery/GalleryImages/Image72.png';
import Image80 from 'src/pages/Gallery/GalleryImages/image80.png';
import Image82 from 'src/pages/Gallery/GalleryImages/image82.png';
import Image106 from 'src/pages/Gallery/GalleryImages/image106.png';
import Image110 from 'src/pages/Gallery/GalleryImages/image110.png';
import Image142 from 'src/pages/Gallery/GalleryImages/image142.png';
import Image89 from 'src/pages/Gallery/GalleryImages/image89.png';
import Image107 from 'src/pages/Gallery/GalleryImages/image107.png';
import Image73 from 'src/pages/Gallery/GalleryImages/image73.png';
import Image96 from 'src/pages/Gallery/GalleryImages/image96.png';
import Image100 from 'src/pages/Gallery/GalleryImages/image100.png';

const images = [
  { src: Image72, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: Image80, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image82, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: Image106, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image110, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image142, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image89, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image107, alt: 'Description of image', caption: 'Strawberry', contentType: 'featured' },
  { src: Image73, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image96, alt: 'Description of image', caption: 'Strawberry' },
  { src: Image100, alt: 'Description of image', caption: 'Strawberry' },
];

const Gallery: React.FC = () => {
  return (
    <>
      <div className="bg-background-color" style={{ color: "#F0FAFF" }}>
        <Header />
      </div>
      
      <div className='pb-20' style={{ color: "#FFFFFF" }}>
        <GalleryGrid images={images} />
      </div>
    </>
  );
};

export default Gallery;
