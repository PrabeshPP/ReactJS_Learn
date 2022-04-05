import { createStore } from "redux";

const counterReducer = (
  state = {
    counter: 0,
    showCounter:true
  },
  action
) => {
    if(action.type==="INCREMENT"){
        return {
            counter:state.counter+action.value,
            showCounter:state.showCounter
        }
    }

    if(action.type==="DECREMENT"){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }

    if(action.type==="ToggleCounterHandler"){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }

    }

    return state;
};

const store = createStore(counterReducer);

export default store;
