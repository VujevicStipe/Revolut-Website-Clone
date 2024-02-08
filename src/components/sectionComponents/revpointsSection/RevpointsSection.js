import React from "react";
import "./RevpointsSection.css";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

const RevpointsSection = ({
  title,
  paragraph,
  btnContent,
  btnDesign,
  backgroundImage,
  children,
}) => {
  return (
    <div
      className="horizontal-home-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      {children}
      <div className="horizontal-home-section-content">
        <h1> {title} </h1>
        <p> {paragraph} </p>
        <ButtonComponent content={btnContent} designType={btnDesign}/>
      </div>
    </div>
  );
};

export default RevpointsSection;
