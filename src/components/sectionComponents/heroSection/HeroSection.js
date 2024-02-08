import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import ButtonComponent from "../../buttonComponent/ButtonComponent";
import CardComponent from "../../cardComponent/CardComponent";

const HeroSection = ({ title, paragraph, btnContent }) => {
  const cardValues = {
    moneyAmount: "3.126€",
    cardBtnContent: "Main ↓",
    cardTitle: "Groceries",
    whenPosted: "just now",
    pointsEarned: "50",
    icon: "grocery",
  };

  return (
    <div className={"hero-section"}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <ButtonComponent content={btnContent} designType="primaryBlackBtn" />
      </div>
      <div className="hero-card-wrap">
        <CardComponent {...cardValues} designType="primaryWhiteBtn" />
      </div>
      <img
        className="hero-girl"
        src="./assets/hero-img-girl.png"
        alt="hero-img-girl"
      />
      <img
        className="hero-sky"
        src="./assets/hero-img-sky.png"
        alt="hero-img-sky"
      />
    </div>
  );
};

export default HeroSection;
