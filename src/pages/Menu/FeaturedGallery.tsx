import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getCarouselImgs, urlFor } from "../../../sv-sanity/SanityClient";

type CarouselImg = {
  img: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
};

const carouselImgs: Array<CarouselImg> = await getCarouselImgs();

export default function FeaturedGallery() {
  return (
    <div className="w-2/3 mx-auto mt-6 flex justify-center p-2 border-4 border-grey rounded-lg">
      <Carousel
        autoPlay
        infiniteLoop
        dynamicHeight
        showThumbs={false}
        showIndicators={false}
        className="my-auto"
      >
        {carouselImgs.map((item: CarouselImg, i: number) => (
          <img src={urlFor(item.img).width(1440).height(800).url()} key={i} />
        ))}
      </Carousel>
    </div>
  );
}
