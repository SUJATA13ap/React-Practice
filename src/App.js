import React,{useState} from 'react'
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";


const App=()=> {

  
  return (
    <div className="App">
     <button onClick={() => window.location.reload()}>Shuffle Cards</button>
      <CardsWrapper cardsNumber="52" />
      
  </div>
  );
}

export default App;