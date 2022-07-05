import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../Redux/action.js";
import { useDispatch, useSelector } from "react-redux";
import {

  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.png";
import { useAuth } from "../../context/AuthContext";

function Search() {
  const [product] = useState();
  const dispatch = useDispatch();
  const { genre } = useParams();
  const productState = useSelector((state) => state.products);
  let StyleInput = {};
  let StyleError = {
    color: "red",
    textShadow: "1px 1px 3px black",
  };
  const { user, logout } = useAuth();
  let welcome = user ? "Hello, " + user.email : "Hello, Guest";
   const handleLogout = async () => {
     await logout();
   };

  const handleChange = (e) => {
    dispatch(
      getProduct({ search: e.target.value.toLowerCase(), genre: genre })
    );
  };

  if (productState.length === 0) {
    StyleInput = StyleError;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-primary text-tertiary py-4 flex justify-around  ">
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="h-7 w-20 " />
        </div>
      </Link>

    

      <div className="text-black flex ">
        <select className="outline-0 h-8 text-sm text-tertiary w-auto text-center rounded-l bg-secondary hover:cursor-pointer hover:text-white">
          <option value="all">All</option>
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <input
          type="search"
          value={product}
          onChange={handleChange}
          className=" w-80 outline-0 text-black px-1 h-8 font-bold "
          style={StyleInput}
        />

        <button
          onSubmit={handleSubmit}
          className="bg-secondary  px-3 h-8 rounded-r"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div>{welcome}</div>
      <Link to="/cart">
        <div className="hover:text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>

      <button
        onClick={handleLogout}
        className="bg-secondary px-3 rounded py-1.5 hover:text-white "
      >
        {user ? "Log out" : <Link to="/login">Log in</Link>}
      </button>
    </div>
  );
}

export default Search;
