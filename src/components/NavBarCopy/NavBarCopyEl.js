import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "black" : "black")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: left;
  text-decoration: none;
  align-items: left;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 990px) {
    transition: 0.8s all ease;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.5rem;
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

  @media screen and (max-width: 990px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 95%;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #39ff14;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  align-items: center;
  display: flex;
  margin-left: 24px;
  padding: 20px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 990px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.9rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: left;
  margin-right: 24px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 15px;
  font-weight: bolder;
  height: 100%;
`;

export const MobileIcon = styled(FaBars)`
  color: black;
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
