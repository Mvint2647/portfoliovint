import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 500px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:200px;
  padding-bottom:100px;
  
  @media screen and (max-width: 990px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
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
background-color:  #18191A;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 540px;
padding: 30px;
box-shadow: 0px 3px 5px rgba(91, 91, 91, 1);
transition: all 0.3 ease-in-out;

&:hover{
transform: scale(1.05);
transition: all 0.4s ease-in-out;
cursor: pointer;

@media screen and (max-width: 480px) {
    max-height: 240px;
  }
}
`;

export const ServicesImage = styled.img`
  height: 200px;
  width: 320px;
  padding:10px;
  
`;

export const ServicesH1 = styled.h1`
  font-display: center;
  margin:20px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #39FF14;
  margin-bottom: 24px;
  margin-top:10px;
  

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 10px;
  text-align: center;
  color: white;
`;
