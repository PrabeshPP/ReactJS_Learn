
import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  const {value:enteredName,
    isValid:enteredNameIsValid,
    hasError:nameInputHasError,
    valueInputHandler:nameInputChangeHandler,
    valueInputBlurHandler:nameBlurHandler,
  reset:resetName}=useInput(value=>value.trim()!=="");


  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueInputHandler:emailInputHandler,
    valueInputBlurHandler:emailInputBlurHandler,
    reset:emailReset
  }=useInput(value=>value.includes("@"))


  let formISValid=false;
  


const formSubmitHandler=(event)=>{
  event.preventDefault();
  if(!enteredNameIsValid && !enteredEmailIsValid){
    return;
  }

  resetName();
  emailReset();
  
}

if(enteredNameIsValid && enteredEmailIsValid){
  formISValid=true;
}
 

  const nameInputClassName=nameInputHasError?"form-control invalid":"form-control";
  const emailInputClassName=emailInputHasError?"form-control invalid":"form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor='name'>Your Name</label>
        <input  type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameBlurHandler}/>
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClassName}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputHandler} onBlur={emailInputBlurHandler}/>
        {emailInputHasError && <p className="error-text">email must contain "@"</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
