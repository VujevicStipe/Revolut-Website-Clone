import React, { useState } from "react";
import "./TransferSection.css";
import { useWindowSize } from "../../WindowSizeContext";
import ToggleContent from "../../utils/ToggleContent";
import ButtonComponent from "../../buttonComponent/ButtonComponent";
import ToggleComponent from "../../toggleComponent/ToggleComponent";

const TransferSection = ({ title, paragraph, btnDesign, video, toggle }) => {
  // responsive
  const { deviceType } = useWindowSize();

  const cardValues = [
    {
      id: 0,
      content: "Pošalji",
      title: "Slanje novca uz jedan klik",
      paragraph:
        "Slanje i primanje novca jednostavno je kao i slanje poruka prijateljima.",
      btnContent: "Isprobajte",
      video: "./assets/video1.mp4",
    },
    {
      id: 1,
      content: "Podijeli",
      title: "Podjela bilo kojeg računa",
      paragraph:
        "Budite heroj grupne večere – zgrabite i podijelite račun u roku odmah.",
      btnContent: "Isprobajte",
      video: "./assets/video1.mp4",
    },
    {
      id: 2,
      content: "Pokloni",
      title: "Pokloni u malom prstu",
      paragraph:
        "Oduševite svoje najmilije nečim što će sigurno iskoristiti – zabavnom darovnom karticom, ili se odlučite za gotovinu. Poslano dok si rek'o keks!",
      btnContent: "Isprobajte",
      video: "./assets/video1.mp4",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  const handleButtonClick = (content) => {
    ToggleContent(cardValues, content, setCardIndex);
  };

  return (
    <div
      className={`toggle-horizontal-section ${
        toggle ? "text-first" : "video-first"
      } ${deviceType}`}
    >
      <div className={`toggle-horizontal-section-content ${deviceType}`}>
        <h1>{toggle ? cardValues[cardIndex]?.title : title}</h1>
        <p>{toggle ? cardValues[cardIndex]?.paragraph : paragraph}</p>
        <ButtonComponent
          content={cardValues[cardIndex]?.btnContent}
          designType={btnDesign}
        />
      </div>
      <div className={`video-container ${deviceType}`}>
        <ToggleComponent
          onClick={handleButtonClick}
          amountOfBtns={cardValues}
          toggle={toggle}
          designType="secondaryBlackBtn"
          selectedContent={cardValues[cardIndex].content}
        >
          <video
            className={`video ${deviceType}`}
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
