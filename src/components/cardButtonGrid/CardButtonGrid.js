import React, { useEffect, useState } from "react";
import "./CardButtonGrid.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CardComponent from "../cardComponent/CardComponent";

const CardButtonGrid = ({ onClick, ...cardValues}) => {
  
  
  
  const handleClick = (content) => {
    onClick(content);
  };

  return (
    <div className="card-button-grid">
      <CardComponent
        className="card-component"
        designType={"primaryWhiteBtn"}
        {...cardValues}
      />
      <div className="card-buttons">
        <ButtonComponent
          onClick={() => handleClick("pustolovina")}
          content="Pustolovina"
          designType="transparentBtn"
        />
        <ButtonComponent
          onClick={() => handleClick("vjencanje")}
          content="Vjencanje"
          designType="transparentBtn"
        />
        <ButtonComponent
          onClick={() => handleClick("selidba")}
          content="Selidba"
          designType="transparentBtn"
        />
        <ButtonComponent
          onClick={() => handleClick("kartaZa")}
          content="Karta za"
          designType="transparentBtn"
        />
      </div>
    </div>
  );
};

export default CardButtonGrid;