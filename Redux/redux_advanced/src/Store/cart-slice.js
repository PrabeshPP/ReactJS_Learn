import { createSlice } from "@reduxjs/toolkit";


const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed:false
};

const CartSlice = createSlice({
  name: "Cart Slice",
  initialState: initialCartState,

  reducers: {

    replaceCart(state,action){
      state.totalQuantity=action.payload.totalQuantity;
      state.items=action.payload.items

    },

    addToCart(state, action) {
      const newItem = action.payload;
      const itemExist = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed=true;
      if (!itemExist) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        itemExist.quantity++;
        itemExist.totalPrice = itemExist.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const itemExist = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed=true;
      if (itemExist.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemExist.quantity--;
        itemExist.totalPrice = itemExist.totalPrice - itemExist.price;
      }
    },
  },
});



export default CartSlice;
export const cartSliceAction = CartSlice.actions;
