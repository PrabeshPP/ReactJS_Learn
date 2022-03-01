import React from "react";

import classes from './input.module.css';
const InputForm=(props)=>{
    return(
       
         <div
          className={`${classes.control} ${
           props.isValid===false? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.htmlFor}>{props.content}</label>
          <input
            type={props.type}
            id={props.type}
            value={props.emailState.value}
            onChange={props.changeHandler}
            onBlur={props.validatehandler}
          />
        </div>
       

    );

}

export default InputForm;
