import React, {useState} from "react";
import './Form.css';

const Form=(props)=>{
    
const[userInput,setUserInput] =useState({
        enteredTitle:" ",
        enteredAmount:" ",
        enteredDate:" "

    })


    const title_change=(event)=>{
        setUserInput((previousState)=>{
            return {
                ...previousState
                ,
                enteredTitle:event.target.value
            };


        });
    

    }

    

    const amount_change=(event)=>{
        setUserInput((previousState)=>{
            return {
                ...previousState
                ,
                enteredAmount:event.target.value
            };


        });
    
        
    }

   
    const date_change=(event)=>{
        setUserInput((previousState)=>{
            return {
                ...previousState
                ,
                enteredDate:event.target.value
            };


        });
    
        
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date:new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setUserInput((previousState)=>{
            return {
                enteredTitle:" ",
                enteredAmount:" ",
                enteredDate:" ",
            };


        });
        
    }


    return (
       <form onSubmit={submitHandler}>
            <div className="Form">
                
                <div className="Form-title">
                    <label>Title</label>
                    <input type={"text"} value={userInput.enteredTitle} onChange={title_change} />
                </div>
                <div className="Form-amount">
                    <label>Amount</label>
                    <input type={"number"} value={userInput.enteredAmount} min={"0.01"} step={"0.01"} onChange={amount_change} />
                </div>
                <div className="Form-date">
                    <label>Date</label>
                    <input type={"date"} value={userInput.enteredDate} min={"2019-01-01"} max={"2022-26-1"} onChange={date_change} />
                </div>
                <div className="Form-Button">
                    <button type="submit">Add Expense</button>
                </div>
                </div>
            
            
            

        </form>
    )
}

export default Form;