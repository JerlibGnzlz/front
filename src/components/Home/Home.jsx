import React from "react";
import eslogan from "./imagenes/eslogan.png";
import linea from "./imagenes/lineaDeportiva.png";
import envios from "./imagenes/envios.png";
import mujer from "./imagenes/mujer.png";
import hombre from "./imagenes/hombre.png";
import niños from "./imagenes/niños.png";
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
        <h4 className="names">Women Clothes</h4>
        <h4 className="names">Men Clothes</h4>
        <h4 className="names">Kids Clothes</h4>
        <h4 className="names">Accessories</h4>
        <img src={mujer} alt="mujer" />
        <img src={hombre} alt="hombre" />
        <img src={niños} alt="niños" />
        <img src={accesorios} alt="accesorios" />

        <button className="boton">
          <Link to="/products/women">See more</Link>
        </button>
        <button className="boton">
          <Link to="/products/men">See more</Link>
        </button>
        <button className="boton">
          <Link to="/products/kids">See more</Link>
        </button>
        <button className="boton">
          <Link to="/products/accesories">See more</Link>
        </button>
      </div>

      <h4 className="Top">Top Sellers</h4>

      <TopSellers />

      <h2 className="opinions">Our Costumers Speak</h2>
      <h3 className="under-text">
        We have been working with costumers around the world
      </h3>

      <div className="testimonials">
        <blockquote>
          <div className="frame">
            <h5>The best clothes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a natus laboriosam vitae eos. In optio, perspiciatis
              deleniti nemo{" "}
            </p>
          </div>
          <img className="Photo" src={testimonial1} alt="testimonial" />
          <cite>David Cooper</cite>
        </blockquote>
        <blockquote>
          <div className="frame">
            <h5>On-time delivery</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a natus laboriosam vitae eos. In optio, perspiciatis
              deleniti nemo{" "}
            </p>
          </div>
          <img className="Photo" src={testimonial2} alt="testimonial" />

          <cite>Esther Hawkins</cite>
        </blockquote>
        <blockquote>
          <div className="frame">
            <h5>I could buy easily</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a natus laboriosam vitae eos. In optio, perspiciatis
              deleniti nemo{" "}
            </p>
          </div>

          <img className="Photo" src={testimonial3} alt="testimonial" />
          <cite>Devon Lane</cite>
        </blockquote>
      </div>

      <div className="stats">
        <h3>5K+</h3>
        <h3>4.5K+</h3>
        <h3>3K+</h3>
        <h3>25+</h3>
        <h4>Happy Costumers</h4>
        <h4>Deliveries</h4>
        <h4>Rewiews</h4>
        <h4>Awards Won</h4>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </div>

      <Footer />
    </div>
  );
}
