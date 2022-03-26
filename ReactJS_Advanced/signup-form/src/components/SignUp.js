import classes from "./SignUp.module.css";


const SignUp=()=>{


    const onFormSubmitHandler=(event)=>{
        event.preventDefault();
    }

   return <form onSubmit={onFormSubmitHandler}>
        {/* Name Field */}
        <div className={classes.box1}>
       

       <div className={classes.container}>
       <div className={classes.box2}>
           <div>
               <label className={classes.label}>First Name:</label>
               <input className={classes.input} type="text" placeholder="Goblin" />
           </div>
           <div>
               <label className={classes.label}>Last Name:</label>
               <input className={classes.input} type="text" placeholder="Prince" />
           </div>
           
       </div>
       {/* Email Field  */}
       <div className={classes.box3}>
       <div>
           <label className={classes["label-email"]}>Email:</label>
           <input className={classes["input-email"]} type="text" placeholder="example@gmail.com" />
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
             <button>SignUp</button>
         </div>

        </div>

        
       

       


   </form>

}


export default SignUp;