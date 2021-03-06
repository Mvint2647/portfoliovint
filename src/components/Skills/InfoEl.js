import styled from "styled-components";

export const InfoContainer = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000000" : "#fff")};
  background: ${({ lightBg }) => (lightBg ? "#000000" : "#fff")};
  border-bottom: 1px black solid;

  @media screen and (max-width: 80px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 375px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 868px) {
    height:50%;
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" col2 col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding: 60px;
  border-left: solid 2px grey;
  text-align: right;
`;

export const TopLine = styled.p`
  color: ${({ lightBg }) => (lightBg ? "#000000" : "#fff")};
  font-size: 26px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
 
  color: ${({ lightText }) => (lightText ? "black" : "white")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 840px;
  margin-bottom: 55px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#000000" : "#fff")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 70%;
  margin: 0 0 10px 0;
 
`;
