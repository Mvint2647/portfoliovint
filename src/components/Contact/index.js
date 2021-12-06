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
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="http://www.melissavinny1133@gmail.com/"
          >
            <h2> Gmail </h2>
          </a>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Behance} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://www.behance.net/Melissasta10d9"
          >
            <h2>Behance</h2>
          </a>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Github} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://github.com/Mvint2647"
          >
            <h2>Github</h2>
          </a>
        </ServiceeCard>
        <ServiceeCard>
          <ServiceeImage src={Linkdin} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://www.linkedin.com/in/melissav1133/"
          >
            <h2>LinkedIn</h2>
          </a>
        </ServiceeCard>
      </ServiceeWrapper>
    </ServiceeContainer>
  );
};

export default Contact;
