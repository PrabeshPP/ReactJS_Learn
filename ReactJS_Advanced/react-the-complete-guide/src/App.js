import React,{useState} from "react";
import './App.css';
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const[showParagraph,setShowParagraph]=useState(false);

  const toggleParagraphHandler=()=>{
    setShowParagraph((previousShowParagraph)=>!previousShowParagraph);
    
  }
  return (
    <div className="app">
    <h1>Hi There</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>ToggleParagraphHandler</Button>
      
    </div>
  );
  
}

export default App;
