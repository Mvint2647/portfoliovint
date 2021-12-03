import React from "react";
import Gmail from "../../images/Gmail.jpg";
import Behance from "../../images/Behance.png";
import Github from "../../images/Github.png";
import Linkdin from "../../images/Linkdin.png";
import {
  ServiceeH1,
  ServiceeImage,
  ServiceeCard,
  ServiceeWrapper,
  ServiceeContainer,
} from "./ContactEl";

const Contact = () => {
  return (
    <ServiceeContainer id="contact">
      <ServiceeH1>Contact me on my favorite Apps!</ServiceeH1>

      <ServiceeWrapper>
        <ServiceeCard>
          <ServiceeImage src={Gmail} className="card-img" alt="..." />
          <h1 href="http://www.melissavinny1133@gmail.com/">Gmail</h1>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Behance} className="card-img" alt="..." />
          <h1 href="https://www.behance.net/Melissasta10d9">Behance</h1>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Github} className="card-img" alt="..." />
          <h1 href="https://github.com/Mvint2647">Github</h1>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Linkdin} className="card-img" alt="..." />
          <h1 href="https://www.linkedin.com/in/melissav1133/">LinkedIn</h1>
        </ServiceeCard>
      </ServiceeWrapper>
    </ServiceeContainer>
  );
};

export default Contact;
