import styled from "styled-components";

export const HeroContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 830px;
  position: relative;
  z-index: 1;
  background: black;

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
  max-width: 1100px;
`;

export const HeroH1 = styled.div`
  font-size: 70px;
  font-weight: bolder;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 990px) {
    font-size: 40px;
    text-align: center;
    color: black;
    border: white 1px solid;
    background-color: white;
    opacity: 0.7;
    padding:10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
    color: black;
    border: white 1px solid;
    background-color: white;
    opacity: 0.7;
    padding:10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
    color: black;
  }
`;

export const HeroP = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  margin-top: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    color: black;
    border: white 1px solid;
    background-color: white;
    opacity: 0.7;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
