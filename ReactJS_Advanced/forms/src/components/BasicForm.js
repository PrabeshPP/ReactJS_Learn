import useBasicForm from "../hooks/use-inputform";

const BasicForm = (props) => {

  const{enteredValueIsValid:firstNameValid,
  hasError:hasError,
valueInputChangeHandler:nameInputChangeHandler,
valueInputBlurHandler:nameInputBlurHandler,
reset:resetFirstName}
  =useBasicForm(value=>value.trim()!="");


  const{enteredValueIsValid:lastNameValid,
    hasError:hasErrorInLastName,
  valueInputChangeHandler:lastnameInputChangeHandler,
  valueInputBlurHandler:lastnameInputBlurHandler,
  reset:resetLastName}
    =useBasicForm(value=>value.trim()!="");

    const{enteredValueIsValid:emaiIsValid,
      hasError:hasErrorInEmail,
    valueInputChangeHandler:emailInputChangeHandler,
    valueInputBlurHandler:emailInputBlurHandler,
    reset:resetemail}
      =useBasicForm(value=>value.includes("@"));

  let formisValid=false;
  if(firstNameValid && lastNameValid && emaiIsValid){
    formisValid=true;
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetemail();

  }

  const firstNameClasses=hasError?"form-control invalid":"form-control"; 
  const lastNameClasses=hasErrorInLastName?"form-control invalid":"form-control"; 
  const emailClasses=hasErrorInEmail?"form-control invalid":"form-control"; 

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
          {hasError && <p className="error-text">name cannot be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onBlur={lastnameInputBlurHandler} onChange={lastnameInputChangeHandler}/>
          {hasErrorInLastName && <p className="error-text">name cannot be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler}/>
        {hasErrorInEmail && <p className="error-text">email should contain "@"</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
