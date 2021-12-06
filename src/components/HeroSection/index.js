// eslint-disable-next-line
import React, { useState } from "react";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from "./HeroEl";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          "Work hard in silence, let your success be your noise."
          <HeroP>- Anonymous</HeroP>
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
