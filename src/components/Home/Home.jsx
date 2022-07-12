import React from "react";
import eslogan from "./imagenes/eslogan.png";
import linea from "./imagenes/lineadeportiva1.png";
import envios from "./imagenes/envios1.png";
import mujer from "./imagenes/mujer.png";
import hombre from "./imagenes/hombre.png";
import niños from "./imagenes/niños.png";
import unisex from "./imagenes/unisex.jpg";
import accesorios from "./imagenes/accesorios.png";
import testimonial1 from "./imagenes/testimoniales1.png";
import testimonial2 from "./imagenes/testimonial2.png";
import testimonial3 from "./imagenes/testimonial3.png";
import Footer from "../footer/Footer";
import NavBar from "../NavBar";
import "./Home.css";
import { Link } from "react-router-dom";
import TopSellers from "../topSeller/TopSellers";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  //const { user } = useAuth();

  /* console.log(user); */
  return (
    <div className="background">
      <NavBar />
      <div className="slider">
        <ul>
          <li>
            <img src={eslogan} alt="eslogan" />
          </li>
          <li>
            <img src={linea} alt="linea" />
          </li>
          <li>
            <img src={envios} alt="envios" />
          </li>
        </ul>
      </div>
      <div className="all">
        <h4 className="names">Hombres</h4>
        <h4 className="names">Mujeres</h4>
        <h4 className="names">Niños</h4>
        <h4 className="names">Sin género</h4>
        <img src={hombre} alt="hombre" />
        <img src={mujer} alt="mujer" />
        <img src={niños} alt="niños" />
        <img
          className="w-[20rem] h-[22.8rem] ml-8 "
          src={unisex}
          alt="sin género"
        />

        <button className="boton">
          <Link to="/products/women">Ver más</Link>
        </button>
        <button className="boton">
          <Link to="/products/men">Ver más</Link>
        </button>
        <button className="boton">
          <Link to="/products/kids">Ver más</Link>
        </button>
        <button className="boton">
          <Link to="/products/no-gender">Ver más</Link>
        </button>
      </div>

      <h4 className="Top">Productos más vendidos</h4>

      <TopSellers />

      <h2 className="opinions">Nuestros clientes </h2>
      <h3 className="under-text">Hemos venido a clientes de todo el país.</h3>

      <div className="testimonials">
        <blockquote>
          <div className="frame">
            <h5>La mejor calidad</h5>
            <p>
              He comprado en varias oportunidades y es de hermosa calidad, son
              mi tienda favorita!!{" "}
            </p>
          </div>
          <img className="Photo" src={testimonial1} alt="testimonial" />
          <cite>David Cooper</cite>
        </blockquote>
        <blockquote>
          <div className="frame">
            <h5>Siempre cumpliendo</h5>
            <p>
              Cada compra que he realizado ha llegado siempre el dia del envio
              correctamente, muy buenos precios y calidad.{" "}
            </p>
          </div>
          <img className="Photo" src={testimonial2} alt="testimonial" />

          <cite>Esther Vegas</cite>
        </blockquote>
        <blockquote>
          <div className="frame">
            <h5>Gran variedad</h5>
            <p>
              Siempre tienen todo lo que necesito para mi y mi familia, sin duda
              los elijo siempre!{" "}
            </p>
          </div>

          <img className="Photo" src={testimonial3} alt="testimonial" />
          <cite>Daniel Lane</cite>
        </blockquote>
      </div>

      <div className="stats">
        <h3>5K+</h3>
        <h3>4.5K+</h3>
        <h3>3K+</h3>
        <h3>25+</h3>
        <h4>Clientes felices</h4>
        <h4>Envios</h4>
        <h4>Vistas</h4>
        <h4>Seguidores</h4>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </div>

      <Footer />
    </div>
  );
}
