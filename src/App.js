import React, {useState} from 'react';
import {Card} from './components/Card'
import {HistoryBar} from './components/HistoryBar'
import "./App.css"

function App() {
  const [isFlipped,setIsFlippped] = useState(false)
  const [mockCharacterList,setMockCharacterList]=useState([
    {character:"a",romaji:"A"},
    {character:"ba",romaji:"Ba"},
    {character:"ka",romaji:"Ka"},
    {character:"ku",romaji:"Ku"},
    {character:"he",romaji:"He"},
    {character:"ji-shi",romaji:"Ji"}])
  const [index,setIndex] = useState(0)
  function makeCard(){
    return  <Card 
    isFlipped={isFlipped}
    romaji={mockCharacterList[index].romaji}
    character={mockCharacterList[index].character}/>
    
  }

  return (
    <div id="div-app">
      <HistoryBar />
      <div className="app-wrapper">
      <div className="response-wrapper">
        <button 
        type="button" 
        className="response"
        onClick={()=>{
          if(index>=mockCharacterList.length-1){
            setIndex(0)
          }else{
            setIndex(index+1)
          }
        }}>
          Proximo
        </button>
      <button 
      type="button" 
      onClick={()=>setIsFlippped(!isFlipped)}
      className="response">Ver resposta</button>
            </div>
          {makeCard()}
     
            </div>
    </div>
  );
}

export default App;
