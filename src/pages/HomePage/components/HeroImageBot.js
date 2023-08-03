import React from "react";
import "./HeroImageBot.css";

const HeroImageBot = () => {
  return (
    <div className="heroImageBotContainer">
      <img className="heroBotImg" src="skatepark.jpg" alt="" />
      <h1 className="heroBotText">
        "The best place to find your dream skate gears!"
      </h1>
    </div>
  );
};

export default HeroImageBot;
