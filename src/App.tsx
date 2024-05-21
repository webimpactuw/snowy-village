import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Menu from "./pages/Menu/Menu";
import Locations from "./pages/AboutUs/Locations";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import NewAbout from "./pages/AboutUs/NewAbout";
// import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import AppLayout from "./components/AppLayout";
// import NewNavbar from "./components/NewNavbar";

function App() {
  return (
    <AppLayout>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/hiring" element={<Contact />} />
          <Route path="/contact/faq" element={<Contact />} />
          <Route path="/contact/collab" element={<Contact />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<Home />} />

          <Route path="/aboutus" element={<NewAbout />}/>
          <Route path="/aboutus/team" element={<NewAbout />}/>
          <Route path="/aboutus/story" element={<NewAbout />}/>
          <Route path="/aboutus/locations" element={<NewAbout />}/>
        </Routes>
      </div>

      <Footer />
    </AppLayout>
  );
}

export default App;
