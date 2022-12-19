import React from "react";
import CardCenterPosition from "./CardCenterPosition";

const CenterCardElement = ({ number, symbol, name }) => {
  return (
    <div>
      {[...Array(Number(number))].map((_symb, index) => {
        index += 1;
        return (
          <span className="centerCard" key={index}>
            <span className="center-symbol-sigle">
              {number >= 0 && number <= 10 ? symbol : ""}
            </span>
          </span>
        );
      })}
      {number === 11 || number === 12 || number === 13 ? (
        <CardCenterPosition number={number} name={name} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CenterCardElement;