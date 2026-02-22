import {Route, Routes } from "react-router-dom";
import Home from "./features/components/Home/Home";
import Navbar from "./features/components/Navbar/Navbar";
import Footer from "./features/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Works from "./features/components/Works/Works";
import Solutions from "./features/components/Solutions/Solutions";
import Services from "./features/components/Services/Services";
import ContactUs from './features/ContactUs/ContactUs';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;