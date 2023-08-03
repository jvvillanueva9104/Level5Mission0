import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <div className="whyMainContainer">
      <h1 className="whyHeading">Why Choose Us?</h1>
      <div className="whyContainer">
        <div className="whyCols">
          <h2 className="whySubHeading">Variety</h2>
          <p className="whyFirstPar">
            Find listings from mid-tier to legend-tier gears!
          </p>
          <h2>Community</h2>
          <p>Join thousands of users who found their dream gears.</p>
        </div>
        <div className="whyCols">
          <h2 className="whySubHeading">Ease</h2>
          <p className="whyFirstPar">
            Effortlessly search, compare, and save your favourites.
          </p>
          <h2>Support</h2>
          <p>Our team is here 24/7 for all your skateboarding needs.</p>
        </div>

        <div className="whyCols">
          <h2 className="whySubHeading">Trust</h2>
          <p className="whyFirstPar">
            We guarantee accurate and up-to-date listings and stocks.
          </p>
          <h2>Innovation</h2>
          <p>We continously improve to offer your the best experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
