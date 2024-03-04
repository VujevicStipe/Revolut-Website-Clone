import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ content, designType, onClick }) => {
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
    <div className={`button-component ${applyBtnStyle} `} onClick={onClick}>
      {content}
    </div>
  );
};

export default ButtonComponent;
