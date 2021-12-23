import Behance from "../../images/Behance.png";
import Github from "../../images/Github.png";
import Linkdin from "../../images/Linkdin.png";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

// eslint-disable-next-line
export default () => (
  <Carousel autoPlay>
    <div>
      <div>
        <img alt="Github" src={Github} className="cardimg" />
      </div>
      <a className="cardtext" href="https://github.com/Mvint2647">
        Click to Visit!
      </a>
    </div>
    <div>
      <div>
        <img alt="LinkedIn" src={Linkdin} className="cardimg" />
      </div>
      <a
        className="cardtext"
        href="https://www.linkedin.com/in/melissav1133/"
      >
        Click to Visit!
      </a>
    </div>
    <div>
      <div>
        <img alt="Behance" src={Behance} className="cardimg" />
      </div>
      <a className="cardtext" href="https://www.behance.net/Melissasta10d9">
        Click to Visit!
      </a>
    </div>
  </Carousel>
);
