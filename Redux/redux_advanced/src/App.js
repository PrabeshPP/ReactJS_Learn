import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { showCartActions } from "./Store/UI";
import Notification from "./components/UI/Notifications";


let isInitial=true;

function App() {
  const isShown = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sentData = async () => {
      dispatch(
        showCartActions.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending Cart Data",
        })
      );
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

      dispatch(
        showCartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart Data Successfully!",
        })
      );
    };

    if(isInitial){
      isInitial=!isInitial;
      return;
    }

    sentData().catch((err) =>
      dispatch(
        showCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not Sent Cart Data Successfully!",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
