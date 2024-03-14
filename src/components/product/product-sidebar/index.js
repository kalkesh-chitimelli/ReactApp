import React from "react";
import CategorySidebar from "../category-sidebar";
import AllProduct from "../all-products";
import "./style.css";

const ProductSideBar = () => {
  return (
    <div className="product-sidebar">
      <CategorySidebar />
      <AllProduct />
    </div>
  );
};

export default ProductSideBar;
