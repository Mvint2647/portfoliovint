// eslint-disable-next-line
import styled from "styled-components";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: " ",
  headline: "About Me",
  description:
    "My name is Melissa and I also go by Mel! I have a certificate in full stack web development from UNC Charlotte and desire for a role in front-end web development. I also have an Associates in Graphic Design and hope to integrate both skills successfully in the web developement industry.",
  imgStart: true,
  img: require("../../images/aboutme.svg").default,
  alt: "aboutme",
  primary: true,
  darktext: false,
  dark: false,
};

export const homeObjTwo = {
  id: "resume",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: " ",
  headline: "Resume",
  description: "Desire a role for a Front-End web developer job or Web Design (U/I, UX). If hired, dedication to the job is shown through work ethic, creativity, and will do what it takes to get the job done right & efficiently. Goals include  achieving success within any establishment and continuing to grow in any position.",
  imgStart: true,
  img: require("../../images/resume.png").default,
  alt: "resume",
  dark: true,
  primary: false,
  darktext: true,
};

