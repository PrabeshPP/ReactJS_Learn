import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React,{useState} from 'react';

function ExpenseItem(props){
    
    const [title,setTitle]=useState(props.title);
   let Alert=()=>{
       setTitle("My name is Prabesh Bista.")
        
        
    }
    
    return (
        <Card className="ExpenseItem-main">
        <ExpenseDate date={props.date}/>    
       <div className="ExpenseItem-description">
    <h2>{title}</h2>
       <div className="ExpenseItem-amount">{"$"+props.amount}</div>
      
       </div>
       <button onClick={Alert}>Change Title</button>
        </Card>
    
    );

}



export default ExpenseItem;