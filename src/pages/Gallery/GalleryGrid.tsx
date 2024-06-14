import React, { useState, useEffect } from 'react';

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


interface GalleryProps {
  images: SanityGalleryImageData[];
}

const getItemSpanClass = (image: SanityGalleryImageData) => {
  if (image.contentType === 'featured') {
    return 'md:col-span-2 lg:col-span-2 row-span-2';
  } else {
    return 'md:col-span-1 lg:col-span-1 row-span-1';
  }
};

const GalleryGrid: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCaption = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-5 sm:p-10">
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        onMouseLeave={() => isLargeScreen && setActiveIndex(null)} 
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer group ${getItemSpanClass(image)}`}
            onClick={() => !isLargeScreen && toggleCaption(index)}
            onMouseEnter={() => isLargeScreen && setActiveIndex(index)}
          >
            <img
              src={image.src.asset.url}
              alt={image.alt}
              className="w-full h-full object-cover transform transition duration-300 ease-in-out"
              style={{
                transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <div
              className={`absolute inset-0 bg-dark-navy bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-white text-center px-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;