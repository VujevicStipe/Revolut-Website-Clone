import React, { useState } from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ content, designType, isActive, onClick }) => {
  let applyBtnStyle;
  switch (designType) {
    case "primaryBlackBtn":
      applyBtnStyle = "primary-black-btn";
      break;
    case "primaryWhiteBtn":
      applyBtnStyle = "primary-white-btn";
      break;
    case "secondaryBlackBtn":
      applyBtnStyle = "secondary-black-btn";
      break;
    case "secondaryWhiteBtn":
      applyBtnStyle = "secondary-white-btn";
      break;
    case "transparentBtn":
      applyBtnStyle = "transparent-btn";
      break;
  }

  return (
    <div
      className={`button-component ${applyBtnStyle} ${isActive ? 'active' : ''} `}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default ButtonComponent;
