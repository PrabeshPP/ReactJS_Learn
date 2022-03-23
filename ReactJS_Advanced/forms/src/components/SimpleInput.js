import {useState} from "react";


const SimpleInput = (props) => {
const [enteredName,setEnteredName]=useState("");
const [enteredNameTouched,setEnteredNameTouched]=useState(false);


const enteredNameIsValid=enteredName.trim() !=='';

const nameInputIsNotValid=!enteredNameIsValid && enteredNameTouched;


  let formISValid=false;
  if(enteredNameIsValid){
    formISValid=true;
  }


const nameInputHandler=(event)=>{
  setEnteredName(event.target.value);
 
}
const nameInputBlurHandler=(event)=>{
  setEnteredNameTouched(true);
}
const formSubmitHandler=(event)=>{
  event.preventDefault();
  if(!enteredNameIsValid){
    return;
  }
  setEnteredName(" ");
  setEnteredNameTouched(false);
}
 

  const nameInputClassName=nameInputIsNotValid?"form-control invalid":"form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameInputHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsNotValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
