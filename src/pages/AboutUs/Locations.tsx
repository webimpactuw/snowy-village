import locationsData from "./locations-data.json";
import LocationItem from "./LocationItem";

export default function Locations() {
  return (
    <div className="bg-white grid gap-6 p-4">
      <h1 className="text-center font-fjalla-one text-5xl tracking-wider text-dark-blue">
        OUR LOCATIONS
      </h1>
      {locationsData.locations.map((location) => (
        <LocationItem locationData={location} />
      ))}
    </div>
  );
}
