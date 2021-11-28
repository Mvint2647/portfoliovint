import React from "react";
import NoteTracker from "../../images/NoteTracker.png";
import Quickfix from "../../images/QuickFixRecipe.png";
import Keyboard from "../../images/Keyboard.gif";
import {
  ServicesH1,
  ServicesImage,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesWrapper,
  ServicesContainer,
} from "./PortfolioEl";

const Portfolio = () => {
  return (
    
    <ServicesContainer id="portfolio">
      
      <ServicesH1>Portfolio Preview</ServicesH1>
      
      <ServicesWrapper>
        <ServicesCard>
          <ServicesImage src={Keyboard} className="card-img" alt="..." />
          <a
            className="card-text mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://keyboardbattle.herokuapp.com/"
          >
            Website
          </a>
          <a
            className="card-text mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://github.com/jboybokungu/keyboard-battle"
          >
            GitHub
          </a>
          <ServicesH2> Keyboard Battle</ServicesH2>
          <ServicesP>
            An online game where two players compete to type a given word FIRST.
            It will use user accounts to keep track of Wins and Losses. Also,
            players can CHALLENGE each other!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesImage src={Quickfix} className="card-img" alt="..." />
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://kerilp.github.io/quick-fix-recipe/"
          >
            Website
          </a>
          <a
            className="card-text mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://github.com/kerilp/quick-fix-recipe"
          >
            GitHub
          </a>
          <ServicesH2> Quick Fix Recipe</ServicesH2>
          <ServicesP>
            {" "}
            Languages: HTML; CSS; JAVASCRIPT. Framework: Pure CSS | Third Party
            API: TheMealDB: An open, crowd-sourced database of recipes from
            around the world. TheCocktailDB: An open, crowd-sourced database of
            drinks and cocktails from around the world.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesImage src={NoteTracker} className="card-img" alt="..." />
          <a
            className="card-text mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://gentle-everglades-44862.herokuapp.com/"
          >
            Website
          </a>
          <a
            className="card-text  mx-4 fs-3 text-success text-decoration-none bg-light"
            href="https://github.com/Mvint2647/Fitness-Tracker"
          >
            GitHub
          </a>
          <ServicesH2> Fitness Tracker App </ServicesH2>
          <ServicesP>
            The fitness tracker allows the user to create a workout where they
            enter various exercises associated to the workout. This Application
            includes minor frontend coding such as simple CSS and backend coding
            using MongoDB, Mongoose and Express.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Portfolio;
