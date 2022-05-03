import { useState,useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const [hasError,setHasError]=useState(" ");
  const [isLoading,setIsLoading]=useState(false);

  
 

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSumbmitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailRef.current.value;
    const enteredPassword=emailRef.current.value;
    setIsLoading(true);
    if(isLogin){

    }else{
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZA5fj2sXClxM5CBWQqckYvo0a8VzwNiM",{
        method:"POST",
        body:JSON.stringify(
          {
            email:enteredEmail,
            password:enteredPassword,
            returSecureToken:true
          }
        ),
        headers:{
          "Content-Type":'application/json'
        }

      }).then(res=>{
        setIsLoading(false);
        setHasError("");
        if(res.ok){
          console.log(res);
          

        }else{
          return res.json().then((data)=>{
            if(data.error.message==="EMAIL_EXISTS")
            setHasError("Email already exist,Try with another account!!");
          })
        }
      });
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSumbmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
         {!isLoading &&  <button>{isLogin ? 'Login' : 'Create Account'}</button>}
         {isLoading && <h5>Loading.....</h5>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {hasError && <p>{hasError}</p>}
    </section>
  );
};

export default AuthForm;
