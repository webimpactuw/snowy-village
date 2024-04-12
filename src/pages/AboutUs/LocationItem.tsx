import LocationData from "./LocationData";

export default function LocationItem({
  locationData,
}: {
  locationData: LocationData;
}) {
  return (
    <div className="grid p-2 gap-4">
      <h1 className="text-center font-fjalla-one text-2xl tracking-wider text-dark-blue">
        {locationData.name}
      </h1>
      <div className="p-2 flex items-center">
        <img src={locationData.img} alt={locationData.name} />
      </div>
      <div>
        <h2 className="text-center font-fjalla-one text-lg tracking-wider text-dark-blue">
          ADDRESS
        </h2>
        <p className="text-center tracking-wide text-dark-blue">
          {locationData.address}
        </p>
      </div>
      <div>
        <h2 className="text-center font-fjalla-one text-lg tracking-wider text-dark-blue">
          HOURS
        </h2>
        <div className="grid grid-flow-col">
          <div>
            {locationData.days.map((day: string) => (
              <p className="text-left text-sm tracking-wide text-dark-blue">
                {day}
              </p>
            ))}
          </div>
          <div>
            {locationData.hours.map((hour: string) => (
              <p className="text-left text-sm tracking-wide text-dark-blue">
                {hour}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
