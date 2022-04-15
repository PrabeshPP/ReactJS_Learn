import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return <React.Fragment>
      <h1>The Products Page.</h1>
      <ul>
        <li><Link to="/product/p1">A Book</Link></li>
        <li><Link to="/product/p2">A Mobile</Link></li>
        <li><Link to="/product/p3">A Computer</Link></li>
      </ul>
    </React.Fragment>;
  };
  
  export default Products;