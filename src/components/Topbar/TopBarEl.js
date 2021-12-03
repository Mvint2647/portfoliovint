import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const TopbarContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 0;
  overflow-x: hidden;
`;

export const CloseIcon = styled(FaTimes)`
  color: red;
`;

export const Icon = styled.div`
  position: fixed;
  top: 5.2rem;
  right: 2.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const TopbarWrapper = styled.div`
  color: white;
`;

export const TopbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const TopbarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #39ff14;
  cursor: pointer;
  text-decoration: none;
  margin-top: 180px;

  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

export const TopBtnWrap = styled.div`
  color: green;
`;
export const TopbarRoute = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #39ff14;
  cursor: pointer;
  text-decoration: none;
  margin-top: -200px;
  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
