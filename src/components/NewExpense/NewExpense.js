import React from "react";
import "./NewExpense.css";
import Form from "./Form";

const NewExpense=()=>{
    return (
        <div className="NewExpense">
            <form>
                <input>Date</input>
                <input>Title</input>
                <input>Amount</input>
            </form>
        </div>
    )

}


export default NewExpense;