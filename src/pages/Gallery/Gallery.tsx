import React from 'react';
import Header from './Header';
import GalleryGrid from './GalleryGrid';

const testURL = 'https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg';

const images = [
  { src: testURL, alt: 'Description of image', caption: 'Strawberry' },
  { src: testURL, alt:'Description of image', caption: 'Black Berry' },
  { src: testURL, alt:'Description of image', caption: 'Other fruit' },

];

function App() {
  return (
    <div className="bg-background-color pb-20">
      <Header />
      <GalleryGrid images={images} />
    </div>
  );
}

export default App;
