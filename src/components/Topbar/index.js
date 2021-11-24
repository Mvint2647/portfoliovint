import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopBtnWrap,
  TopbarLink,
  TopbarMenu,
  TopbarWrapper,
  TopbarRoute,
} from "./TopBarEl";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
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
        <TopBtnWrap>
          <TopbarRoute to="/services">Click to view Services</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
