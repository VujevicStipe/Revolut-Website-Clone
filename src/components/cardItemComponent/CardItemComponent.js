import React from "react";
import "./CardItemComponent.css";
import { FaShoppingBasket, FaCircle } from "react-icons/fa";

const CardItemComponent = ({ ...cardValues }) => {
  let applyIcon;
  switch (cardValues.icon) {
    case "grocery":
      applyIcon = <FaShoppingBasket />;
      break;
    default:
      break;
  }
  return (
    <div className="card-item-component">
      <div className="card-item-component-icon">
        <FaCircle className="circle-background-icon" />
        <div className="item-icon" >{applyIcon}</div>
      </div>
      <div className="card-item-component-wrap">
        <h3>{cardValues.cardTitle}</h3>
        <h4>{cardValues.whenPosted}</h4>
      </div>
      <h5>+ {cardValues.pointsEarned} points</h5>
    </div>
  );
};

export default CardItemComponent;
