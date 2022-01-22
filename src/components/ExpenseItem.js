// import React from "react";
import './ExpenseItem.css'


function ExpenseItem(props){
    
   const month=props.date.toLocaleString('en-US',{month:'long'});
   const day=props.date.toLocaleString('en-US',{day:'2-digit'})
   const year=props.date.getFullYear();
    return (
        <div className="ExpenseItem-main">
            <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            </div>
            
       <div className="ExpenseItem-description">
    <h2>{props.title}</h2>
       <div className="ExpenseItem-amount">{"$"+props.amount}</div>
       </div>
        </div>
    );

}


export default ExpenseItem;