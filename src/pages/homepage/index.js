import React from "react";
import { allProducts } from "../../assets/mockdata";
import BannerSlider from "../../components/banners";
import HomeCategories from "../../components/categories";
import Footer from "../../components/footer";
import FooterBanner from "../../components/footer-banner";
import Navbar from "../../components/navbar";
import ProductSideBar from "../../components/product/product-sidebar";
import ProductsSlider from "../../components/product/product-slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSideBar />
      <FooterBanner />
      <div className="slidercont">
        <ProductsSlider
          products={allProducts}
          categoryname="Related Products"
        />
      </div>
      <div className="slidercont">
        <ProductsSlider products={allProducts} categoryname="Explore More" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
