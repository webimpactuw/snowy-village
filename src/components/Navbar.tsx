import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { IconContext } from "react-icons";
// import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { SIDENAV_ITEMS } from "./SidebarData";
// import { RiArrowDownSFill } from "react-icons/ri";
// import { RiArrowUpSFill } from "react-icons/ri";
// import { SideNavItem } from "./types";

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

  const itemClicked = (hasSubMenu: boolean) => {

    if(!hasSubMenu) {
      sideNavClicked();
    } else {
      console.log("did not close sidebar");
      // <SidebarItem item={item} open={true}/>
    }
  }

  return (
    <>
        <div className={isSidebarOpen ? "hidden" : "duration-300 sticky top-0 flex z-2 bg-dark-navy text-white py-1 px-4"}>
          <div className="sticky inset-x-0 top-0 flex md:items-center mx-auto w-full border-black">
            {/* <h1 className="sm:hidden md:text-2xl w-full">Snowy Village</h1> */}
            <ul className="hidden md:flex">
              <li className="text-xl"><Link to="/" className="p-4 text-xl">Home</Link></li>
              <li><Link to="/menu" className="p-4">Menu</Link></li>
              <li><Link to="/gallery" className="p-4">Gallery</Link></li>
              <li><Link to="/contact" className="p-4">Contact</Link></li>
              <li><Link to="/aboutus" className="p-4">About Us</Link></li>
            </ul>

            <div onClick={sideNavClicked} className="md:hidden top-2 right-1 z-0">
              <AiOutlineMenu size={30}/>
            </div>
          </div>
        </div>
      
      <div className={`
          ${isSidebarOpen ? "z-50 absolute left-0 top-0 h-full w-full border-r border-r-gray-900 bg-background-color translate-x-0" : "translate-x-full fixed hidden"}`}>
            

            <ul className="text-4xl pt-6 pl-5">
          
            {SIDENAV_ITEMS.map((item, idx) => {

              return <div onClick={() => itemClicked(item.submenu !== undefined && item.submenu)}>
                  <SidebarItem item={item} key={idx} />
            </div> 
          })}
          </ul>
       </div>
        
       <div onClick={sideNavClicked} className={ isSidebarOpen ? "z-0 absolute top-0 right-2 md:hidden bg-black" : "hidden"}>
          <IconContext.Provider value={{ color: "green" }}> 
            <AiOutlineClose size={30}/>
          </IconContext.Provider>
        </div>
    </>
  );
}

export default Navbar;
