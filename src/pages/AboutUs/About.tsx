import Locations from "./Locations";

const testURL = 'https://www.betterup.com/hs-fs/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg?width=1928&height=1286&name=Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg';

export default function About() {
  return <>

    <span id="team"/>
    <div className="mx-auto h-30 w-full pt-10 pb-10 bg-dark-blue">
      <h1 className="text-text-color-2 font-fjalla-one text-3xl text-center">ABOUT US</h1>
    </div>

    <div className="mx-auto h-120 w-full md:px-20 sm:px-10 py-10 bg-white">
      <div className=" bg-white pb-10">
        <h1 className="text-dark-blue font-fjalla-one text-3xl text-center">OUR TEAM</h1>
      </div>
      
      <div className=" bg-white pb-20">
      <div className="flex flex-col md:flex-row w-full h-auto bg-white p-5">
        <div className="flex-none w-full md:w-80 relative">
          <div className="md:flex-none w-full md:w-80 h-48 relative">
            <img src={testURL} alt="Team" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-grow p-5" >
          <p className="text-dark-blue font-fjalla-one-">Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team.</p>
        </div>
      </div>
      </div>
    </div>
    
    <span id="story"/>
    <div className="mx-auto h-120 w-auto py-10 sm:px-10 md:px-20 bg-dark-blue">
      <div className=" bg-dark-blue pb-10">
        <h1 className="text-text-color-2 font-fjalla-one text-3xl text-center">OUR STORY</h1>
      </div>

      <div className=" bg-dark-blue pb-20">
        <div className="flex flex-col md:flex-row w-full h-auto bg-dark-blue p-5">
          <div className="flex-grow p-5" >
            <p className="text-text-color-2 font-fjalla-one-">Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team. Write something about the team.</p>
          </div>
          <div className="flex-none w-full md:w-80 relative">
            <div className="md:flex-none w-full md:w-80 h-48 relative">
              <img src={testURL} alt="Team" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <span id="locations"/>
    <Locations />
  </>
}