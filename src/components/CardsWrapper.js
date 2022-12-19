import React from 'react';
import Card from "./Card";
import { numbers, colors, symbols } from "../data";

const CardsWrapper = ({ cardsNumber }) => {
  const cardNumbers = cardsNumber;
  let deck = [];
  const randomValueFromArray = (arrayVal) => {
    if (deck.length === 0) {
      for (let i = 0; i < arrayVal.length; i++)
          deck.push(i);
    }
    let randomValueIndex = Math.floor(Math.random() * deck.length);
    let indexOfItemInarrayVal = deck[randomValueIndex];
    deck.splice(randomValueIndex, 1);
    return arrayVal[indexOfItemInarrayVal];
  };
 
  return (
    <div className="card-wrapper">
      {[...Array(Number(cardNumbers))].map((_numb, index) => {
        index += 1;
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];

        return (
          <Card
            key={index}
            name={randomSymbols.name}
            number={randomValueFromArray(numbers).number}
            color={
              randomSymbols.name === "spade" || randomSymbols.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={randomSymbols.symbol}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;