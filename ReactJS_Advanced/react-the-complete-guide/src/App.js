import React,{useState,useCallback} from "react";
import './App.css';
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  
 const[listTitle,setListTitle]=useState("My List");

  const toggleParagraphHandler=useCallback(
    ()=>{
      setListTitle("New Title");
      
    },
    []
  )
  return (
    <div className="app">
      
      <Button onClick={toggleParagraphHandler}>ToggleParagraphHandler</Button>
      
    </div>
  );
  
}

export default App;
