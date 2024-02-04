import React, { useEffect, useRef, useState } from "react";
import "./CardComponent.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CardItemComponent from "../cardItemComponent/CardItemComponent";

const CardComponent = ({ designType, ...cardValues }) => {
  return (
    <div className="card-component">
      <div className="card-component-wrap">
        <h6>{cardValues.moneyAmount}</h6>
        <ButtonComponent
          content={cardValues.cardBtnContent}
          designType={designType}
        />
      </div>
      {cardValues.backgroundImage && <img src={cardValues.backgroundImage} alt="card background" />}
      <CardItemComponent {...cardValues} />
    </div>
  );
};

export default CardComponent;
