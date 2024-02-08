import React, { useState } from "react";
import "./SavingsSection.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ToggleComponent from "../toggleComponent/ToggleComponent";
import CardComponent from "../cardComponent/CardComponent";

const SavingsSection = ({
  title,
  paragraph,
  smParagraph,
  btnContent,
  btnDesign,
  toggle,
}) => {
  const cardValues = [
    {
      id: 0,
      content: "Pustolovina",
      image: "./assets/btnActionImg1.png",
      moneyAmount: "3.126€",
      cardBtnContent: "Adventure | EUR ↓",
    },
    {
      id: 1,
      content: "Vjencanje",
      image: "./assets/btnActionImg2.png",
      moneyAmount: "5.201€",
      cardBtnContent: "Wedding | EUR ↓",
    },
    {
      id: 2,
      content: "Selidba",
      image: "./assets/btnActionImg3.png",
      moneyAmount: "3.126€",
      cardBtnContent: "Moving | EUR ↓",
    },
    {
      id: 3,
      content: "Karta za",
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
    <div className={`toggle-vertical-section`}>
      <div className={`vertical-home-section-content`}>
        <h1> {title} </h1>
        <p> {paragraph} </p>
        {smParagraph && <h2>{smParagraph}</h2>}
        <ButtonComponent content={btnContent} designType={btnDesign} />
      </div>
      <ToggleComponent
        onClick={handleButtonClick}
        amountOfBtns={cardValues}
        toggle={toggle}
        designType="transparentBtn"
      >
        <div className="toggle-card-component-wrap">
          <CardComponent
            className="card-component"
            designType={btnDesign}
            {...cardValues[cardIndex]}
          />
        </div>
      </ToggleComponent>
      <img src={selectedImage} alt="" />
    </div>
  );
};

export default SavingsSection;
