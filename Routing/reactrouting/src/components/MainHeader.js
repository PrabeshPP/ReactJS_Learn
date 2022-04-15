import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader=()=>{
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li ><NavLink className={({ isActive }) =>(isActive && classes.active)} to="/w">Welcome</NavLink></li>
                    <li><NavLink className={({ isActive }) =>(isActive && classes.active)}to="/p">Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )

}

export default MainHeader;