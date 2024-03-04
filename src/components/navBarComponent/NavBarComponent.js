import React, { useEffect, useState } from "react";
import "./NavBarComponent.css";
import { useWindowSize } from "../WindowSizeContext";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import BurgerMenuComponent from "../BurgerComponent";

const NavBarComponent = () => {
  //responsive
  const { deviceType } = useWindowSize();

  const navigationContent = [
    { label: "Osobno", designType: "secondaryWhiteBtn" },
    { label: "Poslovni", designType: "secondaryWhiteBtn" },
    { label: "Revolut <18", designType: "secondaryWhiteBtn" },
    { label: "Tvrtka", designType: "secondaryWhiteBtn" },
  ];
  const logRegContent = [
    { label: "Prijava", designType: "secondaryWhiteBtn" },
    { label: "Registracija", designType: "primaryWhiteBtn" },
  ];
  const generateButton = (buttonData, index) => {
    return (
      <ButtonComponent
        key={index}
        content={buttonData.label}
        designType={buttonData.designType}
        onClick={() => {
          console.log(buttonData.label);
        }}
      />
    );
  };
  const renderButtons = () => {
    return (
      <>
        {navigationContent.map((buttonData, index) =>
          generateButton(buttonData, index)
        )}
        <span className="separator"></span>
        {logRegContent.map((buttonData, index) =>
          generateButton(buttonData, index)
        )}
      </>
    );
  };

  return (
    <div className={`navbar-component ${deviceType}`}>
      {deviceType==="desktop" && renderButtons()}
      {deviceType!=="desktop" && <BurgerMenuComponent className="menu-burger" />}
    </div>
  );
};

export default NavBarComponent;
