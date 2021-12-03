import styled from "styled-components";

export const ServiceeContainer = styled.div`
  height: 700px;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServiceeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceeCard = styled.div`
  background-color: #18191a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 540px;
  padding: 30px;
  box-shadow: 0px 3px 5px rgba(91, 91, 91, 1);
  transition: all 0.3 ease-in-out;
  color: #39ff14;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      max-height: 240px;
    }
  }
`;

export const ServiceeImage = styled.img`
  height: 190px;
  width: 310px;
  padding: 10px;
  color: #39ff14;
`;

export const ServiceeH1 = styled.h1`
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
