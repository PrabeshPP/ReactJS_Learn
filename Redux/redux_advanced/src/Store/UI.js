import {createSlice } from "@reduxjs/toolkit";

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





export const showCartActions=showCartSlice.actions;
export default showCartSlice;