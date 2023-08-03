import React from "react";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <div className="heroContainer" id="home">
      <img className="heroImage" src="hero-skate.jpg" alt="skate pic"></img>
      <h1 className="heroHeading">Elevate Your Ride</h1>
      <p className="heroPar">
        Explore Premium Skateboarding Gear from the BEST stores!
      </p>
      <div className="heroSearch">
        <input
          className="heroInput"
          type="text"
          placeholder="Search Shops Here"
        ></input>
        <button className="heroButton">Search</button>
      </div>
    </div>
  );
};

export default HeroImage;
