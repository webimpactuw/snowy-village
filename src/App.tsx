import React, { useState } from 'react'
// import Navbar from './components/Navbar';

import { FAQ } from './pages/Contact/FAQ';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/faq" element={<FAQ />} />
      <Route path="/collab" element={<Collab />}/>
      <Route path="/hiring" element={<Hiring />}/>

      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/menu" element={<Menu />}/>
      
      <Route path="/history" element={<History />}/>
      <Route path="/locations" element={<Locations />}/> 
    </Routes>
  )
}

export default App
