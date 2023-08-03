import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [addClass, setAddClass] = useState(false);

  const clickMe = () => {
    setAddClass(!addClass);
  };

  return (
    <>
      <div className="navBar">
        <div className="leftSide">
          <img className="sampleLogo" src="skate.png" alt=""></img>
          <span className="navBusName">OllieZone</span>
        </div>
        <div className="rightSide">
          <a href="/" className="navAnchor">
            Home
          </a>
          <a href="#subs" className="navAnchor">
            Subscribe
          </a>
          <a href="/" className="navAnchor">
            Explore
          </a>
          <button className="ctaBtns">Log In</button>
        </div>
        <div class="hamburger" onClick={clickMe}>
          <div class={`bar1 ${addClass ? "animateBar1" : ""}`}></div>
          <div class={`bar2 ${addClass ? "animateBar2" : ""}`}></div>
          <div class={`bar3 ${addClass ? "animateBar3" : ""}`}></div>
        </div>
      </div>
      <nav class={`mobileNav ${addClass ? "openDrawer" : ""}`}>
        <a href="#work">Home</a>
        <a href="#subs">Subscribe</a>
        <a href="#dribble">Explore</a>
        <button className="ctaBtns">Log in</button>
      </nav>
    </>
  );
};

export default Navbar;
