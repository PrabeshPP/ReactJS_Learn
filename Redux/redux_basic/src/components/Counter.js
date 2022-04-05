import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT",value:1 });
  };

  const incrementHandler1=()=>{
    dispatch({type:"INCREMENT",value:5});
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const counter = useSelector((state) => state.counter);
  const showCounter=useSelector((state)=>state.showCounter)
  const toggleCounterHandler = () => {
    dispatch({type:"ToggleCounterHandler"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandler1}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
