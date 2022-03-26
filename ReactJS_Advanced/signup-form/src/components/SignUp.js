import classes from "./SignUp.module.css";
import useSignUP from "../customhook/useSignUP";

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

    if(enteredNameisValid && enteredLastNameisValid && enteredEmailisValid){
        formIsValid=true;
    }

   return <form onSubmit={onFormSubmitHandler}>
        {/* Name Field */}
        <div className={classes.box1}>
       

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
           <input className={classes["input-email"]} type="number" placeholder="9810101010"/>
        </div>

       </div>
       <div className={classes.box4}>
           <label className={classes["radio-label"]}>Gender:</label>
           <div className={classes["radio-input"]}>
           <div className={classes["radio-input-1"]}>
           <input value="Male" type="radio" name="gender"/>
           <span className={classes.span}>Male</span>
           </div>
           <div className={classes["radio-input-1"]}>
           <input type="radio" value="Female" name="gender" />
           <span className={classes.span}>Female</span>
           </div>
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