import classes from "./SignUp.module.css";
import useSignUP from "../customhook/useSignUP";
import SignUPTemplate from "./SignUP/SignUP_tmp";


const SignUp=()=>{

    const name=(value)=>{
       return value.trim()!="";
    }

    const email=(value)=>{
        return value.includes("@");
    }

    const number=(value)=>{
        return value.length==10;
    }

    const {
        onChangeHandler:onNameChangeHandler,
        onBlurChangeHandler:onNameBlurChangeHandler,
        hasError:nameHasError,
        enteredValueIsValid:enteredNameisValid,
    reset:nameReset}=useSignUP(name);


    const {onChangeHandler:onLastNameChangehandler,
        onBlurChangeHandler:onLastNameBlurChangeHandler,
        hasError:lastNameHasError,
        enteredValueIsValid:enteredLastNameisValid,
    reset:lastNameReset}=useSignUP(name);


        const {onChangeHandler:onEmailChangehandler,
            onBlurChangeHandler:onEmailBlurChangeHandler,
            hasError:emailHasError,
            enteredValueIsValid:enteredEmailisValid,
        reset:emailReset}=useSignUP(email)


        const {onChangeHandler:onNumberChangehandler,
            onBlurChangeHandler:onNumberBlurChangeHandler,
            hasError:numberHasError,
            enteredValueIsValid:enteredNumberisValid,
        reset:numberReset}=useSignUP(number)
    
    
    let formIsValid=false;
    

    

    const onFormSubmitHandler=(event)=>{
        event.preventDefault();
        if(!enteredNameisValid){
            return
        }
        nameReset();
        lastNameReset();
        emailReset();

    }

    if(enteredNameisValid && enteredLastNameisValid && enteredEmailisValid && enteredNumberisValid){
        formIsValid=true;
    }

   return <form onSubmit={onFormSubmitHandler}>
        {/* Name Field */}
        <div className={classes.box1}>
       <div className={classes.container1}>
           <SignUPTemplate/>
       </div>

       <div className={classes.container}>
       <div className={classes.box2}>
           <div>
               <label className={classes.label}>First Name:</label>
               <input className={classes.input} type="text" placeholder="Goblin" onChange={onNameChangeHandler} onBlur={onNameBlurChangeHandler}/>
               {nameHasError && <p>first name cannot be empty</p>}
           </div>
           <div>
               <label className={classes.label}>Last Name:</label>
               <input className={classes.input} type="text" placeholder="Prince" onChange={onLastNameChangehandler} onBlur={onLastNameBlurChangeHandler}/>
               {lastNameHasError && <p>last name cannot be empty</p>}
           </div>
           
       </div>
       {/* Email Field  */}
       <div className={classes.box3}>
       <div>
           <label className={classes["label-email"]}>Email:</label>
           <input className={classes["input-email"]} onChange={onEmailChangehandler} onBlur={onEmailBlurChangeHandler} type="text" placeholder="example@gmail.com" />
           {emailHasError && <p>email must contain "@"</p>}
        </div>
        <div>
           <label className={classes["label-email"]}>Phone Number:</label>
           <input className={classes["input-email"]} onChange={onNumberChangehandler} onBlur={onNumberBlurChangeHandler} type="number" placeholder="9810101010"/>
           {numberHasError && <p>number length must be 10</p>}
        </div>

       </div>

       </div>
         <div className={classes.signUP}>
         <button disabled={!formIsValid}>Submit</button>
         </div>

        </div>

        
       

       


   </form>

}


export default SignUp;