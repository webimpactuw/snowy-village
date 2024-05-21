import { useEffect, useRef, useState } from "react";
import Image72 from "../Gallery/Image72.png";
import Image73 from "../Gallery/Image73.png";
import Image80 from "../Gallery/Image80.png";
import Image82 from "../Gallery/Image82.png";
import Image89 from "../Gallery/Image89.png";
import Image96 from "../Gallery/Image96.png";
import Image100 from "../Gallery/Image100.png";
import Image106 from "../Gallery/Image106.png";
import Image107 from "../Gallery/Image107.png";
import Image110 from "../Gallery/Image110.png";
import Image122 from "../Gallery/Image122.png";
import Image142 from "../Gallery/Image142.png";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    Image72,
    Image73,
    Image80,
    Image82,
    Image89,
    Image96,
    Image100,
    Image106,
    Image107,
    Image110,
    Image122,
    Image142,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center bg-light-blue">
      <div className="mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="mx-auto max-w-7xl justify-center w-full">
          <h2 className="sm:text-5xl text-4xl tracking-wide text-aquamarine-blue font-extrabold text-center mx-auto mb-8">
            OUR COMMUNITY
          </h2>
          <div
            className="carousel carousel-center rounded-box w-full overflow-hidden relative"
            ref={carouselRef}
          >
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(images.length / 3) * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item w-1/3 flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
