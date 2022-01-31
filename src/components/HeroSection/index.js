import React from "react";
import Video from "../../videos/video5.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from "./HeroEl";

const HeroSection = () => {
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video5/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Welcome to my Portfolio Website
          <HeroP>Mel V</HeroP>
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
