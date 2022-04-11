import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false
}

const showCartSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        onShowCart(state){
            state.showCart=!state.showCart;
        },

       
    }


})


const store=configureStore({
    reducer:showCartSlice.reducer
});


export const showCartActions=showCartSlice.actions;
export default store;