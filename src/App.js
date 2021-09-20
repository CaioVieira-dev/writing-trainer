import React, {useState} from 'react';
import {Card} from './components/Card'
import "./App.css"

function App() {
  const [isFlipped,setIsFlippped] = useState(false)
  return (
    <div id="div-app">
      <div class="app-wrapper">
      <div className="response-wrapper">
      <button 
      type="button" 
      onClick={()=>setIsFlippped(!isFlipped)}
      className="response">Ver resposta</button>
            </div>
      <Card isFlipped={isFlipped}/>
      
            </div>
    </div>
  );
}

export default App;
