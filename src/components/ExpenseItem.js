import React from "react";
import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className="ExpenseItem-main">
       <div>March 28th,2021</div>
       <div className="ExpenseItem-description">
    <h2>Car Insurance</h2>
       <div className="ExpenseItem-amount">$292</div>
       </div>
        </div>
    );

}


export default ExpenseItem;