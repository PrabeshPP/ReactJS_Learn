import React from "react";
import './Form.css';
const Form=()=>{
    return (
       <form>
            <div className="Form">
                
                <div className="Form-title">
                    <label>Title</label>
                    <input type={"text"}/>
                </div>
                <div className="Form-amount">
                    <label>Amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"}/>
                </div>
                <div className="Form-date">
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-01"} max={"2022-26-1"}/>
                </div>
                <div className="Form-Button">
                    <button type="submit">Add Expense</button>
                </div>
                </div>
            
            
            

        </form>
    )
}

export default Form;