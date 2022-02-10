import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React,{useState} from 'react';

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