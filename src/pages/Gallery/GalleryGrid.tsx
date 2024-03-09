import React from 'react';


interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: Image[];
}

const GalleryGrid: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>

    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-14">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-sm group">
                <img src={image.src} alt={image.alt} className="w-full h-auto transform group-hover:scale-110 transition duration-300 ease-in-out"/>
                <div className="absolute inset-0 bg-dark-navy bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p className="text-text-color-2 text-center px-4">{image.caption}</p>
                </div>
              </div>
            ))}
        </div>
    </div>

    </>
  );
};

export default GalleryGrid;
