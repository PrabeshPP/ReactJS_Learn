import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <div className="App">
    <MainHeader/>
      <Routes>
      <Route path="/w" element={<Welcome/>}/>
      <Route path="/p" element={<Products/>}/>  
      <Route path="/product-detail/:productId" element={<ProductDetail/>}/>  
      </Routes>
    </div>
  );
}

export default App;
