// import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    
   
    return (
        <div className="ExpenseItem-main">
        <ExpenseDate date={props.date}/>    
       <div className="ExpenseItem-description">
    <h2>{props.title}</h2>
       <div className="ExpenseItem-amount">{"$"+props.amount}</div>
       </div>
        </div>
    );

}


export default ExpenseItem;