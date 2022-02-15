import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length===0){
      setIsValid(false);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;

    }
    props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:isValid?'black':'red'}}>Course Goal</label>
        <input type="text" style={{borderColor:isValid?'black':'red',backgroundColor:isValid?'transparent':'salmon'}}  onChange={goalInputChangeHandler}  />
        {
       <p style={{color:'red', size:'1px'}}>{isValid?"":"Invalid String"}</p>
      }
      </div>
     
      
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
