import { useState } from "react";

const useSignUP=(valid)=>{
    const [enteredValue,setEnteredValue]=useState("");
    const[isTouched,setIsTouched]=useState(false);
    
    const enteredValueIsValid=valid(enteredValue);
    const hasError=!enteredValue && isTouched;

    const onChangeHandler=(event)=>{
        setEnteredValue(event.target.value);

    }

    const onBlurChangeHandler=()=>{
        setIsTouched(true);
    }
    
    const reset=()=>{
        setEnteredValue("");
        setIsTouched(false);
    }

    return{
        onChangeHandler,
        onBlurChangeHandler,
        enteredValueIsValid,
        hasError,
        reset
    }
    


}

export default useSignUP;