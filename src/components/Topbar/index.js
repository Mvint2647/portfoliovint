import React from "react";

import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarLink,
  TopbarMenu,
  TopBtnWrap,
  TopbarRoute,
} from "./TopBarEl";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarMenu>
        <TopBtnWrap>
          <TopbarRoute to="contactpage">Contact</TopbarRoute>
        </TopBtnWrap>
        <TopbarLink to="about" onClick={toggle}>
          About | Skills
        </TopbarLink>
        <TopbarLink to="portfolio" onClick={toggle}>
          Portfolio
        </TopbarLink>
        <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      </TopbarMenu>
    </TopbarContainer>
  );
};

export default Topbar;
