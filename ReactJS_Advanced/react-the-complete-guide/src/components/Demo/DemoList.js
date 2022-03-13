import React from "react";

const DemoList=(props)=>{
    
    const sortedList=props.items.sort((a,b)=>a-b)
    return<div>
        <h2>{props.title}</h2>
        <ul>
            {sortedList.map((value)=><li key={value}>{value}</li>)}
        </ul>

    </div>
    
}

export default DemoList;