import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation=()=>{
    return (
        <div className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={({isActive})=>isActive?classes.active:"null"} to="/quote" >All Quotes</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?classes.active:"null"} to="/new-quote" >Add a Quote</NavLink></li>
            </ul>
        </nav>

        </div>
    )

}

export default MainNavigation;