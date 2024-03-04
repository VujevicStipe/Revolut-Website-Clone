import React from "react";
import "./HeaderComponent.css";
import NavBarItemsComponent from "../navBarComponent/NavBarComponent";

const HeaderComponent = () => {
  return (
    <div className="header-component">
      <img src="./assets/revolut-logo.svg" alt="logo-img" className="logo-svg" ></img>
      <NavBarItemsComponent />
    </div>
  );
};

export default HeaderComponent;
