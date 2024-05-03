import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SanityItemData } from "./SanityItemData";
import { getFeaturedOfType, urlFor } from "../../../sv-sanity/SanityClient";

const featuredBingsoos: Array<SanityItemData> =
  await getFeaturedOfType("bingsoo");

export default function FeaturedGallery() {
  return (
    <div className="w-2/3 mx-auto mt-6 aspect-square flex justify-center">
      <Carousel
        autoPlay
        infiniteLoop
        dynamicHeight
        showThumbs={false}
        showIndicators={false}
        className="my-auto"
      >
        {featuredBingsoos.map((item: SanityItemData, i: number) => (
          <img src={urlFor(item.img).url()} key={i} />
        ))}
      </Carousel>
    </div>
  );
}
