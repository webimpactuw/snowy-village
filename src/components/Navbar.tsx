import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { IconContext } from "react-icons";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Sidebar from "./Sidebar";
// import SidebarItem from "./SidebarItem";
// import { SIDENAV_ITEMS } from "./SidebarData";
// import SidebarPro from "./SidebarPro";
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
      // enablePageScroll();
    } else {
      setIsSidebarOpen(true);
      // disablePageScroll();
    }
  }

  // const itemClicked = (hasSubMenu: boolean) => {

  //   if(!hasSubMenu) {
  //     sideNavClicked();
  //   } else {
  //     console.log("did not close sidebar");
  //     // <SidebarItem item={item} open={true}/>
  //   }
  // }

  return (
    <>
        <div className={isSidebarOpen ? "hidden" : "top-0 sticky flex z-2 bg-dark-navy text-white py-1 px-4"}>
          <div className="sticky inset-x-0 flex md:items-center mx-auto w-full border-black">
            {/* <h1 className="sm:hidden md:text-2xl w-full">Snowy Village</h1> */}
            <ul className="hidden md:flex"> 
              <li><Link to="/" className="hover:bg-blue-200 rounded-md p-4 transition ease-in-out delay-50 mr-1 duration-300">Home</Link></li>
              <li><Link to="/menu" className="p-4 hover:bg-blue-200 rounded-md p-1 ease-in-out delay-50 mr-1 duration-300">Menu</Link></li>
              <li><Link to="/gallery" className="p-4 hover:bg-blue-200 rounded-md p-1 ease-in-out delay-50 mr-1 duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="p-4 hover:bg-blue-200 rounded-md p-1 ease-in-out delay-50 mr-1 duration-300">Contact</Link></li>
              <li><Link to="/aboutus" className="p-4 hover:bg-blue-200 rounded-md p-1 ease-in-out delay-50 mr-1 duration-300">About Us</Link></li>
            </ul>

            <div onClick={sideNavClicked} className="ml-auto md:hidden top-2 pr-0 justify-right right-1 z-0">
              <AiOutlineMenu size={30}/>
            </div>
          </div>
        </div>
      
      <div className="sticky">
      <div className={`
          ${isSidebarOpen ? "sticky z-2 left-0 h-screen border-r-gray-900 bg-background-color mx-auto" : "hidden"}`}>
            
            <Sidebar>
              <Menu className="bg-ice-blue text-2xl"
                menuItemStyles={{
                  button: ({ level, active }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                      return {
                        backgroundColor: active ? '#eecef9' : undefined,
                      };
                  },
                }}>
                <MenuItem component={<Link to="/home"/>} onClick={() => sideNavClicked()}>Home</MenuItem>
                <MenuItem component={<Link to="/menu"/>} onClick={() => sideNavClicked()}>Menu</MenuItem>
                <MenuItem component={<Link to="/gallery" />} onClick={() => sideNavClicked()}>Gallery</MenuItem>
                <SubMenu label="Contact">
                  <MenuItem component={<Link to="/contact/hiring" />} onClick={() => sideNavClicked()}>Hiring</MenuItem>
                  <MenuItem component={<Link to="/contact/collab" />} onClick={() => sideNavClicked()}>Collab</MenuItem>
                  <MenuItem component={<Link to="/contact/faq" />} onClick={() => sideNavClicked()}>FAQ</MenuItem>
                </SubMenu>
                <SubMenu label="About Us">
                  <MenuItem component={<Link to="/aboutus/team" />} onClick={() => sideNavClicked()} >Team</MenuItem>
                  <MenuItem component={<Link to="/aboutus/story" />} onClick={() => sideNavClicked()}>Story</MenuItem>
                  <MenuItem component={<Link to="/aboutus/locations" />} onClick={() => sideNavClicked()}>Locations</MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
            
            {/* <ul className="z-0 text-4xl pt-6 pl-5">
          
            {SIDENAV_ITEMS.map((item, idx) => {

              return <div onClick={() => itemClicked(item.submenu !== undefined && item.submenu)}>
                  <SidebarItem item={item} key={idx} />
            </div> 
          })}
          </ul> */}
       </div>
       </div>
       <div onClick={sideNavClicked} className={ isSidebarOpen ? "z-0 absolute top-0 right-2 md:hidden" : "hidden"}>
          <IconContext.Provider value={{ color: "black" }}> 
            <AiOutlineClose size={30}/>
          </IconContext.Provider>
        </div>
    </>
  );
}

export default Navbar;
