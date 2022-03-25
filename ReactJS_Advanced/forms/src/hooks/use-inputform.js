import { useState } from "react";

const useBasicForm=(isValid)=>{
    const [enteredValue,setEnteredValue]=useState("");
    const [isTouched,setIsTouched]=useState(false);

    const enteredValueIsValid=isValid(enteredValue);
    const hasError=!enteredValueIsValid && isTouched;

    const valueInputBlurHandler=(event)=>{
        setIsTouched(true);


    }

    const valueInputChangeHandler=(event)=>{
        setEnteredValue(event.target.value);

    }

    const reset=()=>{
        setIsTouched(false);
        setEnteredValue("");
    }

    return{
        enteredValueIsValid,
        hasError,
        valueInputChangeHandler,
        valueInputBlurHandler,
        reset
    }



}

export default useBasicForm;