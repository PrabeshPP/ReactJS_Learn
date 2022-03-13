import React,{useMemo} from "react";
import "./DemoList.css";
const DemoList=(props)=>{
    
    let sortedList=useMemo(()=>{
        console.log("use Memo Running")
           return props.items.sort((a,b)=>a-b)
        },[props.items])
        
    return<div className="div">
        <h2>{props.title}</h2>
        <ul>
            {sortedList.map((value)=><li key={value}>{value}</li>)}
        </ul>

    </div>
    
}

export default React.memo(DemoList);