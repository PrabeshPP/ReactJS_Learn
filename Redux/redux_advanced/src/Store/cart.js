import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false
}

const showCartSlice=createSlice({
    name:"counter",
    initialState:showCart,
    reducers:{
        onShowCart(state){
            state.showCart=true;
        },

        onDismiss(state){
            state.showCart=false;
        }
    }


})


const store=configureStore({
    reducer:showCartSlice.reducer
});


export const showCartActions=showCartSlice.actions;
export default store;