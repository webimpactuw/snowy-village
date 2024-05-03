import LocationItem from "./LocationItem";
import { getLocations, urlFor } from "../../../sv-sanity/SanityClient";
import LocationData from "./LocationData";

type SanityLocationData = {
  _rev: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _type: string;
  img: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
  address: string;
  name: string;
  days: Array<string>;
  hours: Array<string>;
  googlemapslink?: string;
  priority: number;
};

const locations: Array<SanityLocationData> = await getLocations();

export default function Locations() {
  return (
    <div className="bg-white grid gap-6 p-4">
      <h1 className="text-center font-fjalla-one text-5xl tracking-wider text-dark-blue">
        OUR LOCATIONS
      </h1>
      {locations
        .sort((a, b) => a.priority - b.priority)
        .map((location: SanityLocationData, i: number) => {
          const data: LocationData = {
            name: location.name,
            img: urlFor(location.img).url(),
            address: location.address,
            days: location.days,
            hours: location.hours,
            googlemapslink: location.googlemapslink,
          };
          return <LocationItem key={i} locationData={data} />;
        })}
    </div>
  );
}
