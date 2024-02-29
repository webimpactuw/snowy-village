import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <header className="flex justify-between items-center h-18 mx-auto fixed top-0 w-full px-4 bg-background-color">
      <div className="rounded border-black">
        <h1 className="text-2xl w-full">Snowy Village</h1>
        <ul className="flex">
          <li><Link to="/" className="p-4">Home</Link></li>
          <li><Link to="/menu" className="p-4">Menu</Link></li>
          <li><Link to="/gallery" className="p-4">Gallery</Link></li>
          <li><Link to="/contact" className="p-4">Contact</Link></li>
        </ul>
      </div>
      </header>
    </>
  );
}

export default Navbar;
