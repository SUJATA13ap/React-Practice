import React from 'react';

const CardCenterPosition = ({ name, number }) => {
  const CardContent = () => {
    switch (number) {
      case 11:
        if (name === "spade") {
          return (<span>JackOfSpade</span>);
        }
        if (name === "club") {
          return (<span>JackOfClub</span>);
        }
        if (name === "heart") {
          return (<span>JackOfHeart</span>);
        }
        if (name === "diamond") {
          return (<span>JackOfDiamond</span>);
        }
        break;
      case 12:
        if (name === "spade") {
          return (<span>QueenOfSpade</span>);
        }
        if (name === "club") {
          return (<span>QueenOfClub</span>);
        }
        if (name === "heart") {
          return (<span>QueenOfHeart</span>);
        }
        if (name === "diamond") {
          return (<span>QueenOfDiamond</span>);
          
        }
        break;
      case 13:
        if (name === "spade") {
          return (<span>KingOfSpade</span>);
        }
        if (name === "club") {
          return (<span>KingOfClub</span>);
        }
        if (name === "heart") {
          return (<span>KingOfHeart</span>);
        }
        if (name === "diamond") {
          return (<span>KingOfDiamond</span>);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="figure-picture">
      <CardContent />
    </div>
  );
};

export default CardCenterPosition;