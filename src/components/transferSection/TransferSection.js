import React, { useState } from "react";
import "./TransferSection.css";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import ToggleComponent from "../toggleComponent/ToggleComponent";

const TransferSection = ({
  title,
  paragraph,
  btnContent,
  btnDesign,
  video,
  toggle,
}) => {
  const cardValues = [
    {
      id: 0,
      title: "Slanje novca uz jedan klik",
      paragraph:
        "Slanje i primanje novca jednostavno je kao i slanje poruka prijateljima.",
      content: "Pošalji",
      video: "./assets/video1.mp4",
    },
    {
      id: 1,
      title: "Podjela bilo kojeg računa",
      paragraph:
        "Budite heroj grupne večere – zgrabite i podijelite račun u roku odmah.",
      content: "Podijeli",
      video: "./assets/video1.mp4",
    },
    {
      id: 2,
      title: "Pokloni u malom prstu",
      paragraph:
        "Oduševite svoje najmilije nečim što će sigurno iskoristiti – zabavnom darovnom karticom, ili se odlučite za gotovinu. Poslano dok si rek'o keks!",
      content: "Pokloni",
      video: "./assets/video1.mp4",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  const handleButtonClick = (content) => {
    console.log(content);
    const selectedVideoIndex = cardValues.findIndex(
      (card) => card.content === content
    );

    if (selectedVideoIndex !== -1) {
      setCardIndex(selectedVideoIndex);
    } else {
      console.error("Card not found for content:", content);
    }
  };

  return (
    <div className={`toggle-horizontal-section ${toggle ? 'text-first' : 'video-first'}`}>
      <div className="toggle-horizontal-section-content">
        <h1>{toggle ? cardValues[cardIndex]?.title : title}</h1>
        <p>{toggle ? cardValues[cardIndex]?.paragraph : paragraph}</p>
        <ButtonComponent content={btnContent} designType={btnDesign} />
      </div>
      <div className="video-container">
        <ToggleComponent onClick={handleButtonClick} amountOfBtns={cardValues} toggle={toggle} designType="primaryBlackBtn">
          <video
            className="video"
            key={cardIndex}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={toggle ? cardValues[cardIndex]?.video : video}
              type="video/mp4"
            />
          </video>
        </ToggleComponent>
      </div>
    </div>
  );
};

export default TransferSection;
