import React, {useState} from 'react';
import {Card} from './components/Card'
import "./App.css"

function App() {
  const [isFlipped,setIsFlippped] = useState(false)
  return (
    <div id="div-app">
      <button type="button" onClick={()=>setIsFlippped(!isFlipped)}>Flip card</button>
      <Card isFlipped={isFlipped}/>
    </div>
  );
}

export default App;
