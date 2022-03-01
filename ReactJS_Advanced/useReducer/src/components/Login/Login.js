import React, { useState, useEffect,useReducer,useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth_context';
import InputForm from '../Input/input';

//! Email Reducer for the Email Input
const emailReducer=(state,action)=>{
  if(action.type==="USER_INPUT"){
    return {value:action.val,isValid:action.val.includes('@')};
  }

  if(action.type==="INPUT_BLUR"){
    return {value:state.value,isValid:state.value.includes('@')};
  }

  return{value:'',isValid:false};
  
}

//! Password Reducer for the Password Input
const passwordReducer=(state,action)=>{
  if(action.type==="USER_PASS"){
    return {value:action.val,isValid:action.val.trim().length>6};
  }
  if(action.type==="INPUT_BLUR"){
    return {value:state.value,isValid:state.value.trim().length>6};
  }
  return {value:'',isValid:false};

}
const Login = () => {
  const authContext=useContext(AuthContext);

  // const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{
    value:'',
    isValid:null
  },);

  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{
    value:'',
  isValid:null});



  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const{isValid:emailIsValid}=emailState;
  const {isValid:passIsValid}=passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
       emailIsValid && passIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value});

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_PASS',val:event.target.value});

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      
        <InputForm  isValid={emailIsValid}
         htmlFor="email" 
        content="E-mail"
         type="email" 
        value={emailState.value} 
        changeHandler={emailChangeHandler} 
        validatehandler={validateEmailHandler}/>

        <InputForm  isValid={passIsValid}
         htmlFor="password" 
        content="Password"
         type="password" 
        value={passwordState.value} 
        changeHandler={passwordChangeHandler} 
        validatehandler={validatePasswordHandler}/>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
