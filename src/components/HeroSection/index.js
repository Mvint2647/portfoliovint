import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg } from "./HeroEl";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Melissa Vint's Portfolio</HeroH1>
        <HeroP>
          Thank you for taking the time to view my online portfolio. Take a
          minute and enjoy some great content that I created for you.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="services">
            {"services"}
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
