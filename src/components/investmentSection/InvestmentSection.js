import React, { useState } from "react";
import "../savingsSection/ToggleVerticalSection.css";
import ToggleComponent from "../toggleComponent/ToggleComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const InvestmentSection = ({ btnDesign, toggle }) => {
  const cardValues = [
    {
      id: 0,
      content: "Dionice",
      title: "Trgovanje uz jedan klik",
      paragraph:
        "Ulažite bez provizije u globalne tvrtke za samo 1 EUR**. Rizik za kapital. Vrijednost ulaganja može varirati. Primjenjuju se Uvjeti i odredbe.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite dionice",
    },
    {
      id: 1,
      content: "Kriptovalute",
      title: "Možda je vrijeme za kriptovalute?",
      paragraph:
        "Kupujte i prodajte više od 130 tokena. Saznajte više o tokenima BTC i ETC.*** Nije regulirano. Vrijednost može pasti. Možda ćete morati platiti porez.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite kriptovalute",
    },
    {
      id: 2,
      content: "Plemeniti metali",
      title: "Ili možda za zlato!",
      paragraph:
        "Ili srebro... ili bilo koji drugi plemeniti metal koji će pridonijeti diverzifikaciji vašeg portfelja.**** Rizik za kapital. Nije regulirano od strane FCA.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite plemenite metale",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);
  console.log(cardIndex);

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
    <div className="toggle-vertical-section black">
      <div className="vertical-home-section-content">
        <h1>{cardValues[cardIndex]?.title}</h1>
        <p>{cardValues[cardIndex]?.paragraph}</p>
        <ButtonComponent
          content={cardValues[cardIndex]?.btnContent}
          designType={btnDesign}
        />
      </div>
      <ToggleComponent
        onClick={handleButtonClick}
        amountOfBtns={cardValues}
        toggle={toggle}
        designType={btnDesign}
      >
        <video
          className="video"
          key={cardIndex}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={cardValues[cardIndex]?.video} type="video/mp4" />
        </video>
      </ToggleComponent>
    </div>
  );
};

export default InvestmentSection;
