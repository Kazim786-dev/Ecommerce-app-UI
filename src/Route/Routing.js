import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import AllProductsPage from "../pages/product/ProductsPage";
import LoginPage from "../pages/auth/login";
import SignUpPage from "../pages/auth/signup";
import ForgetPasswordPage from "../pages/auth/forget-password";
import NewPassPage from "../pages/auth/new-password";



const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forget-pass" element={<ForgetPasswordPage />} />
        <Route path="/new-pass" element={<NewPassPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterLinks;
