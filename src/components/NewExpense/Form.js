import React, {useState} from "react";
import './Form.css';

const Form=()=>{
    
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
    return (
       <form>
            <div className="Form">
                
                <div className="Form-title">
                    <label>Title</label>
                    <input type={"text"} onChange={title_change} />
                </div>
                <div className="Form-amount">
                    <label>Amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"} onChange={amount_change} />
                </div>
                <div className="Form-date">
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-01"} max={"2022-26-1"} onChange={date_change} />
                </div>
                <div className="Form-Button">
                    <button type="submit">Add Expense</button>
                </div>
                </div>
            
            
            

        </form>
    )
}

export default Form;