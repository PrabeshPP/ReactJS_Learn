import {useRef,useState} from "react";


const SimpleInput = (props) => {
const [enteredName,setEnteredName]=useState("");
const nameInputRef=useRef();
const [enteredNameIsValid,setEnteredNameIsValid]=useState(true);
const nameInputHandler=(event)=>{
  
  setEnteredName(event.target.value);
 
}

const formSubmitHandler=(event)=>{
  event.preventDefault();

  if(enteredName.trim()===""){
    setEnteredNameIsValid(false);
    return;
  }

  setEnteredNameIsValid(true);


  const enteredValue=nameInputRef.current.value;
  console.log(enteredName)
  console.log(enteredValue)
  setEnteredName(" ");
}

  const nameInputClassName=enteredNameIsValid?"form-control":"form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputHandler} />
        {!enteredNameIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
