import { showCartActions } from "./UI";
import { cartSliceAction } from "./cart-slice";

export const fetchData=()=>{
    return async (dispatch)=>{
        const fetchCart=async()=>{
            const response=await fetch( "https://foodapp-c413b-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
                throw new Response("unable to fetch the data!");
            }

            const data=await response.json();

            return data;
        }

        try{
            const data=await fetchCart();
            dispatch(cartSliceAction.replaceCart({
                items:data.items || [],
                totalQuantity:data.totalQuantity || 0
            }));
        }catch(err){
            dispatch(
                showCartActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching Cart Data Failed!",
                })
              )

        }

    }
}

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
            body: JSON.stringify({
                items:cart.items,
                totalQuantity:cart.totalQuantity
            }),
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