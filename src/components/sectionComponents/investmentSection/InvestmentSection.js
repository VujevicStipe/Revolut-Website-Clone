import React, { useState } from "react";
import "../savingsSection/SavingsSection.css";
import ToggleComponent from "../../toggleComponent/ToggleComponent";
import ButtonComponent from "../../buttonComponent/ButtonComponent";
import ToggleContent from "../../utils/ToggleContent";

const InvestmentSection = ({ btnDesign, toggle }) => {
  const cardValues = [
    {
      id: 0,
      content: "Dionice",
      title: "Trgovanje uz jedan klik",
      paragraph1: "Ulažite bez provizije u globalne tvrtke za samo 1 EUR**.",
      paragraph2:
        "Rizik za kapital. Vrijednost ulaganja može varirati. Primjenjuju se Uvjeti i odredbe.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite dionice",
    },
    {
      id: 1,
      content: "Kriptovalute",
      title: "Možda je vrijeme za kriptovalute?",
      paragraph1:
        "Kupujte i prodajte više od 130 tokena. Saznajte više o tokenima BTC i ETC.***",
      paragraph2:
        "Nije regulirano. Vrijednost može pasti. Možda ćete morati platiti porez.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite kriptovalute",
    },
    {
      id: 2,
      content: "Plemeniti metali",
      title: "Ili možda za zlato!",
      paragraph1:
        "Ili srebro... ili bilo koji drugi plemeniti metal koji će pridonijeti diverzifikaciji vašeg portfelja.****",
      paragraph2: "Rizik za kapital. Nije regulirano od strane FCA.",
      video: "./assets/coins.mp4",
      btnContent: "Istražite plemenite metale",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  const handleButtonClick = (content) => {
    ToggleContent(cardValues, content, setCardIndex);
  };

  return (
    <div className="toggle-vertical-section black">
      <div className="vertical-home-section-content">
        <h1>{cardValues[cardIndex]?.title}</h1>
        <p>{cardValues[cardIndex]?.paragraph1}</p>
        <p>{cardValues[cardIndex]?.paragraph2}</p>
        <ButtonComponent
          content={cardValues[cardIndex]?.btnContent}
          designType={btnDesign}
        />
      </div>
      <ToggleComponent
        onClick={handleButtonClick}
        amountOfBtns={cardValues}
        toggle={toggle}
        designType="secondaryBlackBtn"
        selectedContent={cardValues[cardIndex].content}
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
