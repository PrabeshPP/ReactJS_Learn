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
      <Route path="/" element={<Welcome/>}/>
      <Route path="/product" element={<Products/>}/>  
      <Route path="/product/:productId" element={<ProductDetail/>}/>  
      </Routes>
    </div>
  );
}

export default App;
