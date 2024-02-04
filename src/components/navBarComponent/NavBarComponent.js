import React, { useEffect, useState } from "react";
import "./NavBarComponent.css";
import { useWindowSize } from "../WindowSizeContext";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import BurgerMenuComponent from "../burgerMenuComponent/BurgerMenuComponent";

const NavBarComponent = () => {
  //responsive
  const { width } = useWindowSize();
  const [navBarComponentRes, setNavBarComponentRes] = useState(false);
  useEffect(() => {
    if (width < 1000) {
      setNavBarComponentRes(true);
    } else {
      setNavBarComponentRes(false);
    }
  }, [width]);

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
    <div className={`navbar-component ${navBarComponentRes ? "sm" : ""}`}>
      {!navBarComponentRes && renderButtons()}
      {navBarComponentRes && <BurgerMenuComponent className="menu-burger" />}
    </div>
  );
};

export default NavBarComponent;
