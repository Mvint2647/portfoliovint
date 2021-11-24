import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 20 24px;
  max-width: 1100px;
  text-decoration: none;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px;
  padding: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -24px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
`;

export const NavLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 25px;
  font-weight: bolder;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 4px;
//   background: black;
//   padding: 10px 22px;
//   color: white;
//   outline: none;
//   border: 1px solid white;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   margin-left: 24px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//    text-decoration: none;
//     color: lightgrey;
//   }
// `;

export const MobileIcon = styled(FaBars)`
  display: none;
  color: white;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
