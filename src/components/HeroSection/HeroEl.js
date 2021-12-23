import styled from "styled-components";

export const HeroContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 830px;
  position: relative;
  z-index: 1;

  :before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 5) 10%, transparent 45%);
    z-index: 2;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;

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

// add :before styles
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: relative;
  padding: 300px 100px;
  max-width: 1300px;
`;

export const HeroH1 = styled.div`
  font-size: 80px;
  font-weight: bolder;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  
  @media screen and (max-width: 990px) {
    font-size: 50px;
    
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 20px;

  }
`;

export const HeroP = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  margin-top: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 990px) {
    font-size: 15px;
  
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 10px;

  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
