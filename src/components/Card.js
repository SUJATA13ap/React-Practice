import React from 'react';
import ImageOfDeckOfCardConditions from "./ImageOfDeckOfCardConditions";
import CenterCardElement from "./CenterCardElement";

const Card = ({ number, color, symbol, name }) => {
  return (
    <div className="card-container">
      <div className={`card-content__inner ${name}`}>
        <div className={`card-content-inner__border-top ${color}`}>
          <div className="top-symbol ">
            <ImageOfDeckOfCardConditions number={number} />
            <span className="top-symbol-sigle">{symbol}</span>
          </div>
          <div />
        </div>
        <div className={`card-content-inner__center grid-${number} ${color}`}>
          <CenterCardElement number={number} symbol={symbol} name={name} />
        </div>
        <div className={`card-content-inner__border-bottom ${color}`}>
          <div />
          <div className="bottom-symbol ">
            <span className="bottom-symbol-sigle">{symbol}</span>
            <ImageOfDeckOfCardConditions number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;