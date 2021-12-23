import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
  padding-top:40px;
`;

export const ServiceWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 55px;
  text-align: center;
  justify-content: center;
  align-items: center;

   @media screen and (max-width: 1000px) {
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
    padding: 0 20px;
  } 
`;

export const ServiceCard = styled.div`
  background-color: #18191a;
  display: flex;
  flex-direction: column;
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

export const ServiceImage = styled.img`
  height: 200px;
  width: 300px;
  padding: 10px;
`;

export const ServiceH1 = styled.h1`
  font-display: center;
  margin: 20px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServiceH2 = styled.h2`
  font-size: 1.5rem;
  color: #39ff14;
  margin-bottom: 24px;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceP = styled.p`
  font-size: 10px;
  text-align: center;
  color: white;
`;
