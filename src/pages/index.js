import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import { homeObjOne, homeObjTwo } from "../components/Skills/Data";
import Portfolio from "../components/Portfolio";
import Graphic from "../components/Graphic";
import Footer from "../components/Footer";

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
      <Skills {...homeObjOne} />
      <Skills {...homeObjTwo} />
      <Portfolio />
      <Graphic />
      <Footer />
    </>
  );
};

export default Home;
