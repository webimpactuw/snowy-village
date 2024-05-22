import Locations from "./Locations";
import NewHeader from "./NewHeader";
import PeopleImage from "./people.png";
import HistoryImage from "./history.png";

export default function NewAbout() {
  return <>

    <span id="team"/>

    <div className="flex-col items-center bg-ice-blue">


      
      <NewHeader />
      
      <div className="flex md:w-full flex-col md:pt-10 pb-10 md:pl-[20%] md:pr-[20%] md:p-8 bg-beige">


        <div className="pt-3 hero">

          <div className="hero-content flex-col lg:flex-row text-center md:text-justify">
            
            <img src={PeopleImage} className="rounded-lg w-[70%] md:w-[50%]"/>

            <div className="p-5 pb-0 text-sm md:text-lg md:pl-12">

              <h1 className="text-bold">Our Team</h1>

              <p>
              Write something about the team. Information about who is in charge and what values Snowy Village has about employees, for example.
              </p>

            </div>
          </div>
        </div>
      </div>

      <span id="story" />

      <div className="flex md:w-full flex-col pb-10 md:pl-[20%] md:pr-[20%] md:p-8 bg-ice-blue">


        <div className="pt-3 hero">

          <div className="hero-content flex-col md:flex-row-reverse text-center md:text-justify">
          
          
              <img src={HistoryImage} className="rounded-lg w-[70%] md:w-[50%]"/>

            <div className="p-5 pb-0 text-sm md:text-lg md:pl-12">

              <h1 className="text-bold">Our Story</h1>
              
              <p>
              Write something about the team. Information about who is in charge and what values Snowy Village has about employees, for example.
              </p>

            </div>
        

          </div>

        </div>
      </div>



    </div>
  
    <span id="locations" />
    <Locations />

  </>
}