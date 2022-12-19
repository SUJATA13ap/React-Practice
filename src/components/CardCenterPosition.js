import React from 'react';

const CardCenterPosition = ({ name, number }) => {
  const CardContent = () => {
    switch (number) {
      case 11:
        if (name === "spade") {
          return (<span className='card-text'>J</span>);
        }
        if (name === "club") {
          return (<span className='card-text'>J</span>);
        }
        if (name === "heart") {
          return (<span className='card-text'>J</span>);
        }
        if (name === "diamond") {
          return (<span className='card-text'>J</span>);
        }
        break;
      case 12:
        if (name === "spade") {
          return (<span className='card-text'>Q</span>);
        }
        if (name === "club") {
          return (<span className='card-text'>Q</span>);
        }
        if (name === "heart") {
          return (<span className='card-text'>Q</span>);
        }
        if (name === "diamond") {
          return (<span className='card-text'>Q</span>);
          
        }
        break;
      case 13:
        if (name === "spade") {
          return (<span className='card-text'>K</span>);
        }
        if (name === "club") {
          return (<span className='card-text'>K</span>);
        }
        if (name === "heart") {
          return (<span className='card-text'>K</span>);
        }
        if (name === "diamond") {
          return (<span className='card-text'>K</span>);
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