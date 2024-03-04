import React from "react";
import "./HeaderSection.css";
import NavBarComponent from "../../navBarComponent/NavBarComponent";

const HeaderSection = () => {
  return (
    <div className="header-component">
      <img
        src="./assets/revolut-logo.svg"
        alt="logo-img"
        className="logo-svg"
      ></img>
      <NavBarComponent />
    </div>
  );
};

export default HeaderSection;
