import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 300px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
color: black;
max-height: 540px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;

&:hover{
transform: scale(1.02);
transition: all 0.2 ease-in-out;
cursor: pointer;

@media screen and (max-width: 480px) {
    max-height: 240px;
  }
}
`;

export const ServicesImage = styled.img`
  height: 200px;
  width: 320px;
`;

export const ServicesH1 = styled.h1`
 
  color: black;
  font-display: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 10px;
  text-align: center;
  color:black;
`;
