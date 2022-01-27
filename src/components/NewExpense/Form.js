import React, {useState} from "react";
import './Form.css';

const Form=()=>{
    const [enteredTitle,setTitle]=useState("");
    const title_change=(event)=>{
        setTitle(event.target.value);
    

    }

    const [enteredAmount,setAmount]=useState(0);

    const amount_change=(event)=>{
        setAmount(event.target.value);
        
    }

    const [enteredDate,setDate]=useState("");
    const date_change=(event)=>{
        setDate(event.target.value);
        
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