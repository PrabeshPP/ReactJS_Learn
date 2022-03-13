import React,{useState} from "react";
import './App.css';
import Button from "./components/UI/Button";

function App() {
  const[showParagraph,setShowParagraph]=useState(false);

  const toggleParagraphHandler=()=>{
    setShowParagraph(true);
  }
  return (
    <div className="app">
    <h1>Hi There</h1>
      {showParagraph && <p>This is New</p>}
      <Button onClick={toggleParagraphHandler}>ToggleParagraphHandler</Button>
    </div>
  );
}

export default App;
