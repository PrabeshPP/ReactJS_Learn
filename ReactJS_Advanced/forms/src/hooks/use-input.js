import { useState } from "react";

const useInput=(validateValue)=>{
  
    const[enteredValue,setEnteredValue]=useState("");
    const[isTouched,setIsTouched]=useState(false);

    const enteredValueIsValid=validateValue(enteredValue);
    const hasError=!enteredValueIsValid && isTouched;

    const valueInputHandler=(event)=>{
        setEnteredValue(event.target.value);
       
      }
      const valueInputBlurHandler=(event)=>{
        setIsTouched(true);
      }

      const reset=()=>{
          setEnteredValue('');
          setIsTouched(false);
      }

    return {
        value:enteredValue,
        isValid:enteredValueIsValid,
        hasError,
        valueInputHandler,
        valueInputBlurHandler,
        reset
    }
    

}

export default useInput;