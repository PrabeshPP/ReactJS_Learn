import React from "react";
import "./NewExpense.css";
import Form from "./Form";

const NewExpense=(props)=>{
 const saveExpenseDataHandler=(enteredExpenseData)=>{
     const ExpenseData={
         ...enteredExpenseData,
         id:Math.floor(Math.random().toString()*100),
     }
     
     props.onNewExpense(ExpenseData);
 }
    return (
        <div className="NewExpense">
           <Form onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

}


export default NewExpense;