import React from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  {
    src: '/img/helmet-1.png',
    isMatched: false,
  },
  {
    src: '/img/potion-1.png',
    isMatched: false,
  },
  {
    src: '/img/ring-1.png',
    isMatched: false,
  },
  {
    src: '/img/scroll-1.png',
    isMatched: false,
  },
  {
    src: '/img/shield-1.png',
    isMatched: false,
  },
  {
    src: '/img/sword-1.png',
    isMatched: false,
  },
];

function App() {
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiseOne, setChoiseOne] = React.useState(null);
  const [choiseTwo, setChoiseTwo] = React.useState(null);

  const handleChoise = (card) => {
    !choiseOne ? setChoiseOne(card) : setChoiseTwo(card)
  }


  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  React.useEffect(() => {
    console.log(choiseOne, choiseTwo);
  }, [choiseOne, choiseTwo]);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffledCards}>New game</button>
      <div className="card-grid">
        {cards.length &&
          cards.map((card) => (
            <Card key={card.id} card={card} handleChoise={handleChoise}/>
          ))}
      </div>
    </div>
  );
}

export default App;
