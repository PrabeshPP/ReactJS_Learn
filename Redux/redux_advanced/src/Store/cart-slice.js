import { createSlice } from "@reduxjs/toolkit";
import { showCartActions } from "./UI";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "Cart Slice",
  initialState: initialCartState,

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemExist = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
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
      if (itemExist.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemExist.quantity--;
        itemExist.totalPrice = itemExist.totalPrice - itemExist.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showCartActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://foodapp-c413b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data failed!");
      }
    };

    try {
        await sendRequest();
        dispatch(
            showCartActions.showNotification({
              status: "success",
              title: "Success!",
              message: "Sent Cart Data Successfully!",
            })
          );
    } catch (error) {
        dispatch(
            showCartActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Could not Sent Cart Data Successfully!",
            })
          )

        
    }

   
  };
};

export default CartSlice;
export const cartSliceAction = CartSlice.actions;
