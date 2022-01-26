import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props){
    return (
        <Card className="ExpenseItem-main">
        <ExpenseDate date={props.date}/>    
       <div className="ExpenseItem-description">
    <h2>{props.title}</h2>
       <div className="ExpenseItem-amount">{"$"+props.amount}</div>
      
       </div>
       <button onClick={function Alert(){
           let square=10*10;
           alert(square);
       }}>Change Title</button>
        </Card>
    
    );

}


export default ExpenseItem;