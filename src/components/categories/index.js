import React from "react";
import "./style.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
