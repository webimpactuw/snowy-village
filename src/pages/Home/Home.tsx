import heroImage from "./image.png"
export default function Home() {
  return(
    <>
    <div className="p-20 grid justify-center">
        <h1 className="text-center text-black text-4xl md:text-5xl mb-1 font-bold">
          Welcome to Snowy Village.
        </h1>

        <h3>
          We are a locally-owned Korean cafe, "text here"
        </h3>

    </div>

    <div className="p-20 grid justify-center">
      <h1 className="text-center text-black text-3xl md:text-4xl mb-1 font-bold">
          We make the best bingsoo!
      </h1>

      <h3>
        Bingsoo is shaved ice, flavored with "text here"
      </h3>

      <img src={heroImage}>

      </img>
    </div>
    </>
  );
}
