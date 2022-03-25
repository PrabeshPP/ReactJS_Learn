import classes from "./SignUp.module.css";


const SignUp=()=>{

   return <form>
       <div className={classes.box1}>
           <div className={classes.firstName}>
               <label className={classes.label}>First Name:</label>
               <input className={classes.input} type="text" />
           </div>
           
       </div>
   </form>

}


export default SignUp;