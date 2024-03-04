import React from "react";
import "./RevpointsSection.css";
import { useWindowSize } from "../../WindowSizeContext";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

const RevpointsSection = ({
  title,
  paragraph,
  btnContent,
  btnDesign,
  backgroundImage,
  children,
}) => {
  const { deviceType } = useWindowSize();
  return (
    <div
      className={`horizontal-home-section ${deviceType}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <img src="./assets/section2img.png" alt="section2img2" />
      <div className={`horizontal-home-section-content ${deviceType}`}>
        <h1> {title} </h1>
        <p> {paragraph} </p>
        <ButtonComponent content={btnContent} designType={btnDesign} />
      </div>
    </div>
  );
};

export default RevpointsSection;
