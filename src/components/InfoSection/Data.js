import { WithTheme } from "styled-components";

export const homeObjOne = {
    id: "about",
    lightBg: true,
   //  lightText: true,
    lightTextDesc: true,
    topLine: "Welcome,", 
    headline: "About Me",
    description: "My name is Melisa Vint and I also go by Mel. I love designing and creating. I am a dog person. I also love going to the gym and eating lots of food!",
   //  buttonLabel: "More about me",
    imgStart: true,
    img: require("../../images/about.svg").default,
    alt: "aboutme",
   //  dark: false,
    primary: true, 
   //  darktext: false,
    Btn: true
 };

 export const homeObjTwo = {
  id: "resume",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: " ", 
    headline: "Resume",
    description: "Resume Link : ",
   //  buttonLabel: "Let's Go!",
    imgStart: true,
    img: require("../../images/resume.svg").default,
    alt: "aboutme",
    dark: false,
    primary: false, 
    darktext: true
 };

 export const homeObjThree = {
   id: "portfolio",
   lightBg: false,
   lightText: true,
   lightTextDesc: false,
   topLine: " ", 
   headline: "Portfolio",
   buttonLabel: "Click me!",
   imgStart: true,
   img: require("../../images/portfolio.svg").default,
   alt: "aboutme",
   dark: true,
   primary: true, 
   darktext: true
 };

 export const homeObjFour = {
    id: "contact",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "TopLine", 
    headline: "HeadLine",
    description: "Description Description Description Description Description Description Description Description Description",
    buttonLabel: "Let's Go!",
    imgStart: true,
    img: require("../../images/services.svg").default,
    alt: "aboutme",
    dark: true,
    primary: true, 
    darktext: false
 };