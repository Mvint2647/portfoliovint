import React from "react";
import lilo from "../../images/lilo.jpg";
import pitbull from "../../images/pitbull.png";
import willow from "../../images/willow.png";
import {
  ServiceH1,
  ServiceImage,
  ServiceH2,
  ServiceP,
  ServiceCard,
  ServiceWrapper,
  ServiceContainer,
} from "./GraphicEl";

const Graphic = () => {
  return (
    
    <ServiceContainer id="graphic">
      <ServiceH1>Graphic Design Preview</ServiceH1>

      <ServiceWrapper>

        <ServiceCard>
          <ServiceImage src={lilo} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://www.behance.net/gallery/51996071/Phone-case"
          >
            Behance
          </a>
          <ServiceH2> Lilo & Stitch Phone Case </ServiceH2>
          <ServiceP>
          ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP
          </ServiceP>
        </ServiceCard>
        
        <ServiceCard>
          <ServiceImage src={pitbull} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://www.behance.net/gallery/44856280/Magazine-Assignment"
          >
            Behance
          </a>
          <ServiceH2> Pitbull Magazine</ServiceH2>
          <ServiceP>
          ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP
          </ServiceP>
          
        </ServiceCard>

        <ServiceCard>
          <ServiceImage src={willow} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://www.behance.net/gallery/48977657/Brand-Logo-for-Company-Style-guide"
          >
            Behance
          </a>
          <ServiceH2> Willow Oaks Design Logo </ServiceH2>
          <ServiceP>
          ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP
          </ServiceP>      
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Graphic;
