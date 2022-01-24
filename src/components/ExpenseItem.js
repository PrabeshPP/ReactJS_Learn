// import React from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){
    return (
        <Card className="ExpenseItem-main">
        <ExpenseDate date={props.date}/>    
       <div className="ExpenseItem-description">
    <h2>{props.title}</h2>
       <div className="ExpenseItem-amount">{"$"+props.amount}</div>
       </div>
        </Card>
    
    );

}


export default ExpenseItem;