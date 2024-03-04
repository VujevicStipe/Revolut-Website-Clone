import React, { useState } from "react";
import "./ToggleBackgroundSection.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CardButtonGrid from "../cardButtonGrid/CardButtonGrid";

const ToggleBackgroundSection = ({
  title,
  paragraph,
  smParagraph,
  btnContent,
  btnDesign,
}) => {
  const cardValues = [
    {
      id: 0,
      content: "pustolovina",
      image: "./assets/btnActionImg1.png",
      moneyAmount: "3.126€",
      cardBtnContent: "Adventure | EUR ↓",
    },
    {
      id: 1,
      content: "vjencanje",
      image: "./assets/btnActionImg2.png",
      moneyAmount: "5.201€",
      cardBtnContent: "Wedding | EUR ↓",
    },
    {
      id: 2,
      content: "selidba",
      image: "./assets/btnActionImg3.png",
      moneyAmount: "3.126€",
      cardBtnContent: "Moving | EUR ↓",
    },
    {
      id: 3,
      content: "kartaZa",
      image: "./assets/btnActionImg4.webp",
      moneyAmount: "23.567€",
      cardBtnContent: "Ticket to | EUR ↓",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    "./assets/btnActionImg1.png"
  );

  const [cardIndex, setCardIndex] = useState(0);

  const handleButtonClick = (content) => {
    console.log(content);
    const selectedImageData = cardValues.find((img) => img.content === content);

    setSelectedImage(selectedImageData ? selectedImageData.image : null);
    setCardIndex(selectedImageData ? selectedImageData.id : null);
  };

  return (
    <div className={`toggle-background-section`}>
      <div className={`vertical-home-section-content`}>
        <h1> {title} </h1>
        <p> {paragraph} </p>
        {smParagraph && <h2>{smParagraph}</h2>}
        <ButtonComponent content={btnContent} designType={btnDesign} />
      </div>
      <CardButtonGrid onClick={handleButtonClick} {...cardValues[cardIndex]} />
      <img src={selectedImage} alt="" />
    </div>
  );
};

export default ToggleBackgroundSection;
