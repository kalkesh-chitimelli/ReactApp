import React from "react";
import ProductCard from "../product-card";
import "./style.css";
import { allProducts } from "../../../assets/mockdata";
const AllProduct = () => {
  return (
    <div className="allproducts">
      <h1>All products</h1>
      <div className="products">
        {allProducts.map((item, index) => {
          return <ProductCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
