import React from "react";
import "./Home.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import Why from "./components/Why";
import HeroImageBot from "./components/HeroImageBot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Cards />
      <Reviews />
      <Why />
      <HeroImageBot />
      <Contact />
      <a href="#home">
        <img className="arrowUp" src="arrrowup.png" alt="" />
      </a>
      <Footer />
    </div>
  );
};

export default Home;
