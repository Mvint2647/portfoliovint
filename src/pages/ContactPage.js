import React, { useState } from "react";
import NavBarCopy from "../components/NavBarCopy";
import Contact from "../components/Contact/Carousel";
// import Email from "../components/Email/Email";
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
      {/* <Email /> */}
      <Footer />
    </>
  );
};

export default ContactPage;
