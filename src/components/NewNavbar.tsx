import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

function NewNavbar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TODO: also disable scroll

  const sideNavClicked = (): void => {
    if(isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }

  
  return (
    <div className="sticky top-0 z-50">

<div className="drawer font-kumbh-sans">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={isSidebarOpen}/> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={"w-full navbar bg-aquamarine-blue sticky top-0"}>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white" onClick={() => sideNavClicked()}>
          <AiOutlineMenu size={30}/>
        </label>
      </div> 
      <div className="flex-none hidden lg:block text-white">
        <ul className="menu menu-horizontal text-xl">
          {/* Navbar menu content here */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </div>
    </div>
  </div> 

    {/* learn to uncheck this ssidebar */}
  <div className="drawer-side lg:hidden">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay text-aquamarine-blue" onClick={() => sideNavClicked()}>
    {/* <AiOutlineClose size={30}/> */}
    </label> 

    {/* <input id="my-drawer-3" type="checkbox" className="drawer-overlay" checked={isSidebarOpen} /> */}
    <ul className="sticky menu p-4 pt-10 pl-5 w-80 min-h-full bg-base-100 text-xl">
      {/* Sidebar content here */}
        <li onClick={() => sideNavClicked()}><Link to="/">Home</Link></li>
        <li onClick={() => sideNavClicked()}><Link to="/menu">Menu</Link></li>
        <li onClick={() => sideNavClicked()}><Link to="/gallery">Gallery</Link></li>
        
        <div className="collapse collapse-arrow">
          <input type="checkbox" name="my-accordion-2"/> 
          <div className="collapse-title font-medium"> 
          <Link to="/contact">Contact</Link>
          </div>
        
          <div className="collapse-content"> 
            <ul>
              <li onClick={() => sideNavClicked()}>
              <Link to="/contact#hiring">Hiring </Link>
              </li>
              <li onClick={() => sideNavClicked()}>
              <Link to="/contact#collab">Collab </Link>
              </li>
            </ul>

          </div>
        </div>
        
        <div className="collapse collapse-arrow">
          <input type="checkbox" name="my-accordion-2"/> 
          <div className="collapse-title font-medium">
            <Link to="/aboutus">About Us</Link>
          </div>

          <div className="collapse-content"> 
            <ul>
              <li onClick={() => sideNavClicked()}>
              <Link to="/aboutus#team">Team </Link>
              </li>

              <li onClick={() => sideNavClicked()}>
              <Link to="/aboutus#story">Story</Link>
              </li>

              <li onClick={() => sideNavClicked()}>
              <Link to="/aboutus#locations">Locations</Link>
              </li>
            </ul>

          </div>
        </div>
    </ul>
  </div>
</div>



    </div>
  )
}

export default NewNavbar;
