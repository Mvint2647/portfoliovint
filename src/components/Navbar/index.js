import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavLink,
  MobileIcon,
  NavbarContainer
} from "./NavbarEl";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Melissa Vint</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink to="about">About</NavLink>

            <NavLink to="portfolio">Portfolio</NavLink>

            <NavLink to="resume">Resume</NavLink>

            <NavLink to="contact">Services</NavLink>
          </NavMenu>
          </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
