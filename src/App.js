import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import { UserRegister } from "./components/UserRegister";
import ShoppingCart from "./components/ShoppingCart/ShopppingCart";
import { AuthProvider } from "./context/AuthContext";
import Reset from "./components/reset/Reset";

import Products from "./components/Products/Products";

//import orderDetails from "./components/OrderDetails/orderDetails";

import Checkout from "./components/Checkout/Checkout.jsx";
import Admin from "./components/Admin/Admin";
import SideBar from "./components/SideBarUser.jsx/SideBar";
import FormProduct from './components/Admin/Products/formProduct';
import EditProduct from "./components/Admin/Products/EditProduct";
import ProductsAdmi from "./components/Admin/Products/ProductsAdmi";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:genre" element={<Products />} />
          <Route path="/detail/:id" exact element={<ProductDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<SideBar />} />
          <Route path="/admin/products" element={<ProductsAdmi />} />
          <Route path="/admin/create" element={<FormProduct />} />
          <Route path="/admin/products/:id" element={<EditProduct />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
