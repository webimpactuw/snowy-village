import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Menu from "./pages/Menu/Menu";
import History from "./pages/AboutUs/History";
import Locations from "./pages/AboutUs/Locations";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
// import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { NewNavbar } from "./components/NewNavbar";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <NewNavbar />
      
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
