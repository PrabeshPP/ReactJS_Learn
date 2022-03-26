import classes from "./SignUp_Left.module.css";

import img from "C:/Users/prabe/OneDrive/Desktop/ReactJS/reactJS_intro/ReactJS_Advanced/signup-form/src/assets/chip.png"

const LeftComponent=()=>{
    return(
        <div>
         <div className={classes.card}>
        <div className={classes.h1}>
        <h1>My Coin</h1>
        </div>
        <div>
        <img className={classes.chip} src={img} />
        </div>
        <h2 className={classes["card-number"]}>XXXX XXXX XXXX XXXX</h2>
        <div className={classes["card-date"]}>
            <h3>2090</h3>
            <h3>10/12</h3>
            <h3>9/25</h3>
        </div>
        <h4 className={classes.h4}>Lord Voldemort</h4>
        </div>

        <h3 className={classes.h5}>Manage your money like ultra-rich</h3>

        </div>
       
    )

}

export default LeftComponent;