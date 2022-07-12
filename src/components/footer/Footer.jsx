import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function footer() {
  return (
    <div>
      <div className="footer">
        <h4>Companía</h4>
        <h4>Ayuda</h4>
        <h4>Legal</h4>
      </div>

      <div className="link">
        <NavLink to="#">
          <h5>Sobre Nosotros</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Centro de ayuda</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Politica de Cookies</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Blog</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Cenrtro de seguridad</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Politicas de privacidad</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Terminos de servicios</h5>
        </NavLink>
        <NavLink to="#">
          <h5>Contactenos</h5>
        </NavLink>
        <NavLink to="#">
          <h5></h5>
        </NavLink>

        <h6>©2022 Free Style. Todos los derechos reservados </h6>
      </div>
    </div>
  );
}
