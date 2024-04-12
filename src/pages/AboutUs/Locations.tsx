export default function Locations() {

  const testImage = "https://lh3.googleusercontent.com/p/AF1QipM9LwlyDh_6XNlIHH8lGvgsYrroEn7gbxRtz06p=s1360-w1360-h1020";
  return <>
  <div className="container mx-auto h-30 w-auto py-10 bg-white">
    <h1 className="text-dark-blue font-fjalla-one text-3xl text-center">OUR LOCATIONS</h1>
  </div>

  <div className="container mx-auto h-120 w-auto py-10 bg-white">
    <h2 className="text-dark-blue font-fjalla-one text-2xl text-center">SEATTLE</h2>
    <img src={testImage}/>
  </div>

  </>;
}
