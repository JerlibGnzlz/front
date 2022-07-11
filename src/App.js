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

import OrderDetails from "./components/OrderDetails/OrderDetails";

// import Checkout from "./components/Checkout/Checkout.jsx";
import CheckoutAddress from "./components/Checkout/CheckoutAddress";
import EditProfile from "./components/UserDashboard/EditProfile";
import UserProfile from "./components/UserDashboard/UserProfile";

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
          <Route path="/checkout" element={<CheckoutAddress />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/reset" component={<Reset />} />
          <Route path="/profile/:id" element={<EditProfile/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/order/:email" element={<OrderDetails/>} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
