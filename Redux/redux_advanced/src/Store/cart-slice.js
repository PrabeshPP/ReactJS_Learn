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
            const itemExist=state.items.find((item)=>item.id===newItem.id);
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
        removeFromCart(state,action){
            const id=action.payload;
            const itemExist=state.items.find((item)=>item.id===id);
            if(itemExist.quantity===1){
                state.items=state.items.filter((item)=>item.id!=id);
            }else{
                itemExist.quantity--;
                itemExist.totalPrice=itemExist.totalPrice-itemExist.price;
            }
             


        }
    }
    
})


export default CartSlice;
export const cartSliceAction=CartSlice.actions;