import React,{useState,useCallback,useMemo} from "react";
import './App.css';
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button";


function App() {
  
 const[listTitle,setListTitle]=useState("My List");

  const changeTitleHandler=useCallback(
    ()=>{
      setListTitle("New Title");
      
    },
    []
  )
  /* Since the componet is render again and again,the array obj is created at different memory location
    So,even if the array is similar it would have different adrres,making it fale when compared the same array object. */


    const listItems=useMemo(()=>{
      return [5,3,1,10,9]
    },[])

    
  return (
    <div className="app">
    <div className="div1">
    
    <DemoList title={listTitle} items={listItems}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>

    </div>
     
      
    </div>
  );
  
}

export default App;
