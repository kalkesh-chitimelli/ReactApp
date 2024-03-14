import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Cart from "./pages/cart/cart";
import About from "./pages/extras/about";
import Contact from "./pages/extras/contact";
import FAQ from "./pages/extras/faq";
import PrivacyPolicy from "./pages/extras/privacyPolicy";
import Termsandconditions from "./pages/extras/termsAndConditions";
import Home from "./pages/homepage";
import LoginSingnUp from "./pages/loginsignup";
import ProductPage from "./pages/product";
import GeneralItems from "./pages/generaltems";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginSingnUp />} />
        <Route path="/signup" element={<LoginSingnUp />} />
        <Route path="/product/:prodid" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/generalItems" element={<GeneralItems />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
