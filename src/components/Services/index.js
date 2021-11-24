import React from "react";
import {
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesWrapper,
  ServicesContainer,
} from "./ServiceEl";

import Icon1 from "../../images/Icon1.svg";
import Icon2 from "../../images/";
import Icon3 from "../../images/";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Blah1 Blah1</ServicesH2>
          <ServicesP> Blah1 Blah1 Blah1 </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Blah2 Blah2 </ServicesH2>
          <ServicesP> Blah2 Blah2 Blah2 </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Blah3 Blah3 </ServicesH2>
          <ServicesP> Blah3 Blah3 Blah3 </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
