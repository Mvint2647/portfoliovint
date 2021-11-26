import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarLink,
  TopbarMenu,

} from "./TopBarEl";

const Topbar = ({  isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
   
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggle}>
            About
          </TopbarLink>
          <TopbarLink to="portfolio" onClick={toggle}>
            Portfolio
          </TopbarLink>
          <TopbarLink to="resume" onClick={toggle}>
            Resume
          </TopbarLink>
          <TopbarLink to="contact" onClick={toggle}>
            Contact
          </TopbarLink>
        </TopbarMenu>
    </TopbarContainer>
  );
};

export default Topbar;
