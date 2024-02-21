import { FAQ } from "./pages/Contact/FAQ";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/collab" element={<Collab />} />
      <Route path="/hiring" element={<Hiring />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/menu" element={<Menu />} />

      <Route path="/history" element={<History />} />
      <Route path="/locations" element={<Locations />} />
    </Routes>
  );
}

export default App;
