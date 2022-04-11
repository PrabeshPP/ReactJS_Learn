import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    items:[],
    totalQuantity:0,
    totalAmount:0
}

const CartSlice=createSlice({
    name:"Cart Slice",
    initialState:initialCartState,
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const itemExist=items.find((item)=>item.id===newItem.id);
            if(!itemExist){
                state.items.push(
                    {
                        id:newItem.id,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.price,
                        name:newItem.name

                    }
                )
            }else{
                itemExist.quantity++;
                itemExist.totalPrice=itemExist.totalPrice+newItem.price;
            }

        },
        removeFromCart(state){

        }
    }
    
})


export default CartSlice;
export const cartSliceAction=CartSlice.actions;