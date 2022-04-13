import {createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false,
    notification:null
}

const showCartSlice=createSlice({
    name:"UI",
    initialState:initialState,
    reducers:{
        onShowCart(state){
            state.showCart=!state.showCart;
        },

        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }

       
    }


})





export const showCartActions=showCartSlice.actions;
export default showCartSlice;