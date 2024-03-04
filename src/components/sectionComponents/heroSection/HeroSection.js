import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { useWindowSize } from "../../WindowSizeContext";
import ButtonComponent from "../../buttonComponent/ButtonComponent";
import CardComponent from "../../cardComponent/CardComponent";

const HeroSection = ({ title, paragraph, btnContent }) => {
  const { deviceType } = useWindowSize();

  const cardValues = {
    moneyAmount: "3.126€",
    cardBtnContent: "Main ↓",
    cardTitle: "Groceries",
    whenPosted: "just now",
    pointsEarned: "50",
    icon: "grocery",
  };

  return (
    <div className={`hero-section ${deviceType}`}>
      <div className={`hero-content ${deviceType}`}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <ButtonComponent content={btnContent} designType="primaryBlackBtn" />
      </div>
      <div className={`hero-card-wrap ${deviceType}`}>
        <CardComponent {...cardValues} designType="primaryWhiteBtn" />
      </div>
      <img
        className="hero-girl"
        src="./assets/hero-img-girl.png"
        alt="hero-img-girl"
        loading="lazy"
      />
      <img
        className="hero-sky"
        src="./assets/hero-img-sky.png"
        alt="hero-img-sky"
        loading="lazy"
      />
    </div>
  );
};

export default HeroSection;
