import React, { useEffect, useState } from "react";
import "./ToggleComponent.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const ToggleComponent = ({ onClick, amountOfBtns, toggle, designType, children }) => {
  const handleClick = (content) => {
    onClick(content);
  };

  return (
    <div className="toggle-component">
      {children}
      {toggle && <div className="toggle-component-buttons">
        {amountOfBtns.map((btn, index) => (
          <ButtonComponent
            key={btn.id}
            onClick={() => handleClick(btn.content)}
            content={btn.content}
            designType={designType}
          />
        ))}
      </div>}
    </div>
  );
};

export default ToggleComponent;
