import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="heroCardsContainer">
      <div className="cardsContainer">
        <span className="heroSpan">Boards</span>
        <img className="heroCardImgs" src="skateboards.jpg" alt=""></img>
        <div className="cardsTexts">
          <span>Premium Boards from the best of the best shops!</span>
          <a className="cardLinks" href="/">
            Explore
          </a>
        </div>
      </div>
      <div className="cardsContainer">
        <span className="heroSpan">Gears</span>
        <img className="heroCardImgs" src="gears.jpg" alt=""></img>
        <div className="cardsTexts">
          <span>Top notch gears to help keep you safe 100%</span>
          <a className="cardLinks" href="/">
            Explore
          </a>
        </div>
      </div>
      <div className="cardsContainer">
        <span className="heroSpan">Shoes</span>
        <img className="heroCardImgs" src="skateshoes.jpg" alt=""></img>
        <div className="cardsTexts">
          <span>Skate shoes from the best brands!</span>
          <a className="cardLinks" href="/">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
