import Home from "./pages/Home/Home";
// import FAQ from "./pages/Contact/FAQ";
// import Collab from "./pages/Contact/Contact";
// import Hiring from "./pages/Contact/Hiring";
import Gallery from "./pages/Gallery/Gallery";
import Menu from "./pages/Menu/Menu";
import History from "./pages/AboutUs/History";
import Locations from "./pages/AboutUs/Locations";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/history" element={<History />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>

      <Navbar/>
    </>
  );
}

export default App;
