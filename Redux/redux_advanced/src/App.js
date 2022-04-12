import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";
import React,{ useEffect } from 'react';

function App() {
  const isShown=useSelector((state)=>state.ui.showCart);
  const cart=useSelector((state)=>state.cart);
  useEffect(()=>{
    fetch("https://foodapp-c413b-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    })
  },[cart])
  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
