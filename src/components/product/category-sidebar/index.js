import React from "react";

import { categoryData } from "../../../assets/mockdata";
import "./style.css";

const CategorySidebar = () => {
  return (
    <div className="categorysidebar">
      {categoryData.map((item) => {
        return (
          <div className="category">
            <img src={item.categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
