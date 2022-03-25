import { useState,useReducer } from "react";

const initialState={
    value:"",
    isTouched:false
}

const inputStateReducer=(state,action)=>{
    if(action.type==="INPUT"){
        return {
            value:action.value,
            isTouched:state.isTouched
        }
    }

    if(action.type==="BLUR"){
        return{
            value:state.value,
            isTouched:true
        }
    }

    if(action.type==="RESET"){
        return initialState;
    }



    return initialState;

}

const useBasicForm=(isValid)=>{

    const[inputState,dispatchInput]=useReducer(inputStateReducer,initialState)
    const enteredValueIsValid=isValid(inputState.value);
    const hasError=!enteredValueIsValid && inputState.isTouched;

    const valueInputBlurHandler=(event)=>{
        dispatchInput({type:"BLUR",isTouched:false});


    }

    const valueInputChangeHandler=(event)=>{
        dispatchInput({type:"INPUT",value:event.target.value});

    }

    const reset=()=>{
       dispatchInput({type:"RESET"})
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