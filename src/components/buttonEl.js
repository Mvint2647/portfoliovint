import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#39FF14" : "#39FF14")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "0px 0px" : "0px 0px")};
  color: ${({ dark }) => (dark ? "#39FF14" : "39F14")};
  font-size: ${({ fontBig }) => (fontBig ? "10px" : "16px")};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF" : "#00000")};

  }
`;
