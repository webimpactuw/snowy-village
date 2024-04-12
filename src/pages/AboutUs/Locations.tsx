import locationsData from "./locations-data.json";
import LocationItem from "./LocationItem";

export default function Locations() {
  return (
    <div className="bg-white grid gap-6 p-4">
      {locationsData.locations.map((location) => (
        <LocationItem locationData={location} />
      ))}
    </div>
  );
}
