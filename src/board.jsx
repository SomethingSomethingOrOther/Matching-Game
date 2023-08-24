import React, { useState } from 'react';
import Card from './card';
import "./board.css"

const generateRandomValues = () => {
  
  const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const pairs = [...values, ...values];
  
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
};

const Board = () => {
  const [cards, setCards] = useState(generateRandomValues().map(value => ({ value, flipped: false })));
  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleReset = () => {
    setCards(generateRandomValues().map(value => ({ value, flipped: false })));
    setFlippedIndices([]);
  };

  const handleCardClick = index => {
    if (flippedIndices.length === 1 && flippedIndices[0] !== index) {
      const newCards = [...cards];
      newCards[index].flipped = true;
      if (newCards[index].value === newCards[flippedIndices[0]].value) {
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          newCards[index].flipped = false;
          newCards[flippedIndices[0]].flipped = false;
          setFlippedIndices([]);
          setCards(newCards);
        }, 1000);
      }
      setCards(newCards);
    } else {
      setFlippedIndices([index]);
      setCards(cards => cards.map((card, i) => (i === index ? { ...card, flipped: true } : card)));
    }
  };

  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card  
          key={index}
          value={card.value}
          flipped={card.flipped || flippedIndices.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Board;