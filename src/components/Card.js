import React from 'react';

const Card = ({ card, handleChoise }) => {
  return (
    <div className="card-grid">
      <div onClick={() => handleChoise(card)}>
        <img className="front" src={card.src} alt="front" />
        <img className="back" src="/img/cover.png" alt="back" />
      </div>
    </div>
  );
};

export default Card;
