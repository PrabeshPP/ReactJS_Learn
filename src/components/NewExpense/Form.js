import React from "react";

const Form=()=>{
    return (
        <Form>
            <div className="Form">
                <div className="Form-date">
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-01"} max={"2022-26-1"}/>
                </div>
                <div className="Form-title">
                    <label>Title</label>
                    <input type={"text"}/>
                </div>
                <div className="Form-amount">
                    <label>Amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"}/>
                </div>
                <div>
                    <button type="submit">Ok</button>
                </div>
                </div>
            
            
            

        </Form>
    )
}

export default Form;