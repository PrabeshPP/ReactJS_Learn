import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/w" element={<Welcome/>}/>
      <Route path="/p" element={<Products/>}/>  
      </Routes>
    </div>
  );
}

export default App;
