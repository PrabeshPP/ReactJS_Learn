import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { showCartActions } from "./Store/UI";
import Notification from "./components/UI/Notifications";
import {sendCartData} from "./Store/cart-slice"


let isInitial=true;

function App() {
  const isShown = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
   

    if(isInitial){
      isInitial=!isInitial;
      return;
    }

    dispatch(sendCartData(cart));
   
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
