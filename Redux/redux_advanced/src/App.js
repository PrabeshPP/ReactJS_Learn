import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from "react-redux";
import React,{ useEffect } from 'react';
import { showCartActions } from './Store/UI';

function App() {
  const isShown=useSelector((state)=>state.ui.showCart);
  const cart=useSelector((state)=>state.cart);
  const notification=useSelector((state)=>state.ui)
  const dispatch=useDispatch();
  useEffect(()=>{
    const sentData=async()=>{
      dispatch(
        showCartActions.showNotification({
          status:"Pending",
          title:"Sending...",
          message:"Sending Cart Data"
        })
      )
     const response=await fetch("https://foodapp-c413b-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    })

    if(!response.ok){
      throw new Error("Sending Cart Data failed!");  
    }


    dispatch(
      showCartActions.showNotification({
        status:"Success",
        title:"Success!",
        message:"Sent Cart Data Successfully!"
      })
    )


    }
    sentData().catch((err)=> dispatch(
      showCartActions.showNotification({
        status:"Error",
        title:"Error!",
        message:"Could not Sent Cart Data Successfully!"
      })
    ))
    
  },[cart,dispatch])
  
  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
