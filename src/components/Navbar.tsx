import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Behavior: The top bar is hidden if the side bar is open. The side bar
// can only be open if in mobile mode, and the sidebar takes up the whole screen.
// When the sidebar is open, prevent scrolling and use z-50 to ensure it is on top of everything else.
function Navbar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideNavClicked = (): void => {
    if(isSidebarOpen) {
      setIsSidebarOpen(false);
      enablePageScroll();
    } else {
      setIsSidebarOpen(true);
      disablePageScroll();
    }
  }

  return (
    <>
        <div className={isSidebarOpen ? "hidden" : "sticky top-0 flex z-40 bg-dark-navy text-white py-1 px-4"}>
          <div className="sticky top-0 flex md:items-center mx-auto w-full border-black">
            {/* <h1 className="sm:hidden md:text-2xl w-full">Snowy Village</h1> */}
            <ul className="hidden md:flex">
              <li className="text-xl"><Link to="/" className="p-4 text-xl">Home</Link></li>
              <li><Link to="/menu" className="p-4">Menu</Link></li>
              <li><Link to="/gallery" className="p-4">Gallery</Link></li>
              <li><Link to="/contact" className="p-4">Contact</Link></li>
              <li><Link to="/aboutus" className="p-4">About Us</Link></li>
            </ul>

            <div onClick={sideNavClicked} className="md:hidden top-2 right-1">
              <AiOutlineMenu size={30}/>
            </div>
          </div>
        </div>
      
      <div className={`ease-in-out duration-300
          ${isSidebarOpen ? "z-50 absolute left-0 top-0 h-full w-full border-r border-r-gray-900 bg-background-color translate-x-0" : "translate-x-full fixed hidden"}`}>
        <div className="m-10">
          <ul className="uppercase text-lg">
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/" onClick={sideNavClicked}>Home</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/menu" onClick={sideNavClicked}>Menu</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/gallery" onClick={sideNavClicked}>Gallery</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/contact" onClick={sideNavClicked}>Contact</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/aboutus" onClick={sideNavClicked}>About Us</Link></li>
          </ul>
        </div>

        <div onClick={sideNavClicked} className="absolute top-2 right-2 md:hidden">
          <AiOutlineClose size={30}/>
        </div>

      </div>
    </>
  );
}

export default Navbar;
