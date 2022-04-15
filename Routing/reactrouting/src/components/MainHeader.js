import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader=()=>{
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                {/* //Provide Condition instead of the Truthy statement */}
                    <li ><NavLink className={({ isActive }) =>(isActive? classes.active :null)} to="/welcome">Welcome</NavLink></li>
                    <li><NavLink className={({ isActive }) =>(isActive?classes.active:null)}to="/product">Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )

}

export default MainHeader;