// import React from "react";
import { Routes, Route } from "react-router-dom";    
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Villas from "./components/Villas";
import VillasDetails from "./components/VillasDetails"
import Contact from "./components/Contact";
// import Contact from "./components/Contact";
// import Services from "./components/Services";

// , Route, Routes, Link

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/about" element = {<About />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/villas" element={<Villas />}></Route>
          <Route path ="/villas-details" element={<VillasDetails />}></Route>
          <Route path="/contactUs" element={<Contact />}></Route>
          <Route path="/villa/:id" element={<VillasDetails />} />
        </Routes> 
      <Footer />
      </>
  );
}

export default App;