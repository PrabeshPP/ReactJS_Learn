import React from "react";
import classes from "./Button.module.css";

const Button=(props)=>{
    console.log("Button is Running.")
    return (
        <button onClick={props.onClick} className={classes.button}>
            {props.children}
        </button>
    )

}


export default React.memo(Button);