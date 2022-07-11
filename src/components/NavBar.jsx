import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";
import { useAuth } from "../context/AuthContext.js";

function NavBar() {
  const { user, logout } = useAuth();
  console.log(user, 'esto es lo del')
  const handleLogout = async () => {
    await logout();
  };

  let welcome = user ? "Hello, " + user.email : "Hello, Guest";

  return (
    <div className="bg-primary text-tertiary py-4 flex justify-around  ">
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="h-7 w-20 " />
        </div>
      </Link>
      
        <div>{welcome}</div>
      
      <Link to="/cart">
        <div className="hover:text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>
      {/* Boton Login */}

      <button
        onClick={handleLogout}
        className="bg-secondary px-3 rounded py-1.5 hover:text-white "
      >
        {user ? "Log out" : <Link to="/login">Log in</Link>}
      </button>
    </div>
  );
}

export default NavBar;
