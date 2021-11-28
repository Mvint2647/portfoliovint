import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavLink,
  MobileIcon,
  NavbarContainer,
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Melissa Vint
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact={"true"}
              offset={-80}
              activeClass="active"
            >
              About
            </NavLink>

            <NavLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact={"true"}
              offset={-80}
              activeClass="active"
            >
              Portfolio
            </NavLink>

            <NavLink
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              exact={"true"}
              offset={-80}
              activeClass="active"
            >
              Resume
            </NavLink>

            {/* <NavLink
              to="footer"
              smooth={true}
              duration={500}
              spy={true}
              exact={"true"}
              offset={-80}
              activeClass="active"
            >
              Services
            </NavLink> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
