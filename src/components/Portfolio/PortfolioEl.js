import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
  padding:50px;
  border-bottom: 1px solid black;
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 10px;
  display: relative;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
`;

export const ServicesCard = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-height: 540px;
  padding: 30px;
  box-shadow: 0px 3px 5px rgba(91, 91, 91, 1);
  transition: all 0.3 ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      max-height: 240px;
    }
  }
`;

export const ServicesImage = styled.img`
  height: 500px;
  width: 800px;
  padding: 10px;
`;

export const ServicesH1 = styled.h1`
  font-display: center;
  margin: 20px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #39ff14;
  margin-bottom: 24px;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 10px;
  text-align: center;
  color: white;
`;
