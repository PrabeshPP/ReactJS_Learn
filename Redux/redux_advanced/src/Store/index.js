import showCartSlice from "./UI";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        ui:showCartSlice.reducer
    }
});

export default store;