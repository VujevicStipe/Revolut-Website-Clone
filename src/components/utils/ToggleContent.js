
const ToggleContent = (cardValues, currentContent, setCardIndex) => {
  console.log(currentContent);
  const selectedCardIndex = cardValues.findIndex(
    (card) => card.content === currentContent
  );

  if (selectedCardIndex !== -1) {
    setCardIndex(selectedCardIndex);
  } else {
    console.error("Card not found for content:", currentContent);
  }
};

export default ToggleContent;
