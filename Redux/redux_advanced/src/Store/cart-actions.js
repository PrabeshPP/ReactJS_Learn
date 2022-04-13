import { showCartActions } from "./UI";

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