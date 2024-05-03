import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Menu from "./pages/Menu/Menu";
import History from "./pages/AboutUs/History";
import Locations from "./pages/AboutUs/Locations";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
<<<<<<< HEAD
// import SidebarPro from "./components/SidebarPro";
import Navbar from "./components/Navbar";
// import { DaisyNav } from "./components/DaisyNav";
=======
import Footer from "./components/footer";
>>>>>>> 35c4702ac35289ab1f4a44632e66b3c453f4019e

function App() {
  return (
    <>
      {/* <DaisyNav /> */}
      {/* <SidebarPro /> */}
      <Navbar/>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/hiring" element={<Contact />} />
          <Route path="/contact/faq" element={<Contact />} />
          <Route path="/contact/collab" element={<Contact />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/history" element={<History />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<Home />} />

          <Route path="/aboutus" element={<About />}/>
          <Route path="/aboutus/team" element={<About />}/>
          <Route path="/aboutus/story" element={<About />}/>
          <Route path="/aboutus/locations" element={<About />}/>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
