import showCartSlice from "./UI";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";

const store=configureStore({
    reducer:{
        ui:showCartSlice.reducer,
        cart:CartSlice.reducer
    }
});

export default store;