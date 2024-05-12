import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const NewNavbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideNavClicked = (): void => {
    if(isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }

  
  return (
    <div className="sticky top-0 z-0">

<div className="drawer font-kumbh-sans">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className={"w-full navbar bg-aquamarine-blue sticky top-0"}>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
          <AiOutlineMenu size={30}/>
        </label>
      </div> 
      {/* <div className="flex-1 px-2 mx-2 text-lg">Snowy Village</div> */}
      <div className="flex-none hidden lg:block text-white">
        <ul className="menu menu-horizontal text-xl">
          {/* Navbar menu content here */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </div>
    </div>
  </div> 

  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-xl font-medium">
            Contact
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
    </ul>
  </div>
</div>



    </div>
  )
}
