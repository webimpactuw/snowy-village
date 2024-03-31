import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideNavClicked = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className="bg-background-color fixed top-0 flex justify-between items-center h-2/10 mx-auto w-full px-4 rounded border-black z-50">
        <h1 className="text-2xl w-full">Snowy Village</h1>
        <ul className="hidden md:flex">
          <li><Link to="/" className="p-4">Home</Link></li>
          <li><Link to="/menu" className="p-4">Menu</Link></li>
          <li><Link to="/gallery" className="p-4">Gallery</Link></li>
          <li><Link to="/contact" className="p-4">Contact</Link></li>
        </ul>

        <div onClick={sideNavClicked} className="md:hidden">
          {isSidebarOpen ? <></> : <AiOutlineMenu size={30}/>}
        </div>
      </div>
      
      <div className={isSidebarOpen ? "fixed left-0 top-0 h-full w-[80%] border-r border-r-gray-900 bg-background-color" : "fixed hidden"}>
        <div className="m-10">
          <ul className="uppercase text-lg">
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/" onClick={sideNavClicked}>Home</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/menu" onClick={sideNavClicked}>Menu</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/gallery" onClick={sideNavClicked}>Gallery</Link></li>
            <li className="pt-4 pb-2 border-b border-gray-600"><Link to="/contact" onClick={sideNavClicked}>Contact</Link></li>
          </ul>
        </div>

        <div onClick={sideNavClicked} className="fixed top-2 right-2 md:hidden">
          {isSidebarOpen ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>

      </div>
    </>
  );
}

export default Navbar;
