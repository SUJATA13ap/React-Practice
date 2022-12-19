import React,{useState} from 'react'
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";


const App=()=> {
  const [message, setMessage] = useState('');
  const[value, setValue] = useState(""); 
  var arr = [];
  
const fetchCardCount=(event)=>{
  event.preventDefault();
 var rm=value;
 event.preventDefault();
 console.log("RM",rm);
  while(arr.length < 8){
      var r = Math.floor(Math.random() * 13) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  setMessage(arr)
  console.log("Arr",arr);
}

console.log("Test",message);
  return (
    <div className="App">
     <button onClick={() => window.location.reload()}>Shuffle Cards</button>
      <CardsWrapper cardsNumber="52" />
      
  </div>
  );
}

export default App;