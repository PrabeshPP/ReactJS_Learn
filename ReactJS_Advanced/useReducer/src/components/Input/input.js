import React,{useRef,useImperativeHandle} from "react";

import classes from './input.module.css';
const InputForm=React.forwardRef((props,ref)=>{
    const inputRef=useRef();
   
    const activate=()=>{
            inputRef.current.focus();
    }
    useImperativeHandle(ref,()=>{
        return{
            focus:activate
        }
    })
    return(

        
       
         <div
          className={`${classes.control} ${
           props.isValid===false? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.htmlFor}>{props.content}</label>
          <input
          ref={props.ref}
            type={props.type}
            id={props.type}
            value={props.value}
            onChange={props.changeHandler}
            onBlur={props.validatehandler}
          />
        </div>
       

    );

}) 

export default InputForm;
