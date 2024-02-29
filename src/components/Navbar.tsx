import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-background-color fixed top-0 flex justify-between items-center h-2/10 mx-auto w-full px-4 rounded border-black">
        <h1 className="text-2xl w-full">Snowy Village</h1>
        <ul className="flex">
          <li><Link to="/" className="p-4">Home</Link></li>
          <li><Link to="/menu" className="p-4">Menu</Link></li>
          <li><Link to="/gallery" className="p-4">Gallery</Link></li>
          <li><Link to="/contact" className="p-4">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
