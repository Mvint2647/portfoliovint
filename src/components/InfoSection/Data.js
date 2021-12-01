import styled from "styled-components";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightTextDesc: true,
  topLine: "About me",
  description:
    "My name is Melissa and I also go by Mel! I have a certificate in full stack web development from UNC Charlotte and desire for a role in front-end web development. I also have an Associates in Graphic Design as well and hope to integrate both skills successfully in the web developement industry.",
  imgStart: true,
  img: require("../../images/aboutme.svg").default,
  alt: "aboutme",
  primary: true,
};

export const homeObjTwo = {
  id: "resume",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: " ",
  headline: "Resume",
  description: "Desire a role for a Front-End web developer job (U/I, UX). If hired, dedication to the job is shown through work ethic, creativity, and will do what it takes to get the job done right & efficiently. Goals include  achieving success within any establishment and continuing to grow in any position.",
  imgStart: true,
  img: require("../../images/resume.png").default,
  alt: "resume",
  dark: false,
  primary: false,
  darktext: true,
};

export const homeObjFour = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "TopLine",
  headline: "HeadLine",
  description:
    "Description Description Description Description Description Description Description Description Description",
  imgStart: true,
  img: require("../../images/services.svg").default,
  alt: "aboutme",
  dark: true,
  primary: true,
  darktext: false,
};
