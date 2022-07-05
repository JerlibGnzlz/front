import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function footer() {
  return (
    <div className="padre">
      <div className="footer">
        <h4>Company</h4>
        <h4>Support</h4>
        <h4>Legal</h4>
      </div>
      <div className="link">
        <NavLink to="#">
          <h5>About Us</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Help Center</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Cookies Policy</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Blog</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Safety Center</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Privacy Policy</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Community Guidelines</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Terms of Service</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Contact Us</h5>
        </NavLink>
        <h6>© 2022 Free Style Store. All rights reserved</h6>
      </div>
    </div>
  );
}
