import React, { useState } from "react";
import NavBarCopy from "../components/NavBarCopy";
import Contact from "../components/Contact/Carousel";
import Time from "../components/Time/Time";
import Footer from "../components/Footer";


const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBarCopy toggle={toggle} />
      <Contact />
      <Time />
      <Footer />
    </>
  );
};

export default ContactPage;
