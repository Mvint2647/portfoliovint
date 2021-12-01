import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from "../components/InfoSection/Data";
import Portfolio from "../components/Portfolio";
// import Graphic from "../components/Graphic";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    `<InfoSection {...homeObjFour} /> `
      <Portfolio />
     
      {/* <Graphic /> */}
      <Footer />
   </>
  );
};

export default Home;
