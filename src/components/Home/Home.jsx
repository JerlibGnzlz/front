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

export default function Home() {
  return (
    <div className="background">
      <NavBar />
      <div className="slider ">
        <div className="uli ">
          <img className="w-1/3 " src={eslogan} alt="eslogan" />
          <img className="w-1/3 " src={linea} alt="linea" />
          <img className="w-1/3 " src={envios} alt="envios" />
        </div>
        {/* <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
      <div className="grid grid-cols-1 gap-2 pr-8 pl-8 mt-4 sm:grid-cols-2 lg:grid-cols-4 sm:pr-4 sm:pl-4">
        <div className="flex flex-col gap-2">
          <h4 className="names">Women Clothes</h4>
          <img className="w-full" src={mujer} alt="mujer " />
          <button className="bg-secondary text-white bottomRadius pt-2 pb-2 w-full">
            <Link to="/products/women">See more</Link>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="names">Women Clothes</h4>
          <img className="w-full" src={hombre} alt="hombre" />
          <button className="bg-secondary text-white bottomRadius pt-2 pb-2 w-full">
            <Link to="/products/men">See more</Link>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="names">Women Clothes</h4>
          <img className="w-full" src={niños} alt="niños" />
          <button className="bg-secondary text-white bottomRadius pt-2 pb-2 w-full">
            <Link to="/products/kids">See more</Link>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="names">Women Clothes</h4>
          <img className="w-full" src={accesorios} alt="accesorios" />
          <button className="bg-secondary text-white bottomRadius pt-2 pb-2 w-full">
            <Link to="/products/accesories">See more</Link>
          </button>
        </div>
        {/* <h4 className="names">Women Clothes</h4>
        <h4 className="names">Men Clothes</h4>
        <h4 className="names">Kids Clothes</h4>
        <h4 className="names">Accessories</h4>
        <img className="w-full" src={mujer} alt="mujer " />
        <img className="w-full" src={hombre} alt="hombre" />
        <img className="w-full" src={niños} alt="niños" />
        <img className="w-full" src={accesorios} alt="accesorios" />

        <button className="bg-secondary text-white bottomRadius pt-2 pb-2">
          <Link to="/products/women">See more</Link>
        </button>
        <button className="bg-secondary text-white bottomRadius pt-2 pb-2">
          <Link to="/products/men">See more</Link>
        </button>
        <button className="bg-secondary text-white bottomRadius pt-2 pb-2">
          <Link to="/products/kids">See more</Link>
        </button>
        <button className="bg-secondary text-white bottomRadius pt-2 pb-2">
          <Link to="/products/accesories">See more</Link>
        </button> */}
      </div>

      <h4 className="Top">Top Sellers</h4>

      <TopSellers />
      <h2 className="font-extra-bold text-5xl text-center w-full mb-3">
        Our Costumers Speak
      </h2>
      <h3 className="w-full text-center mb-3">
        We have been working with costumers around the world
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-4 pl-4 mt-8 ">
        {/* <blockquote> */}
        <div className="flex flex-col items-center">
          <h5>The best clothes</h5>
          <p className="bg-testimony mt-5 mb-5 p-3 rounded-3xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo{" "}
          </p>
          <img className="Photo mb-2" src={testimonial1} alt="testimonial" />
          <cite>David Cooper</cite>
        </div>
        {/* </blockquote>
        <blockquote> */}
        <div className="flex flex-col items-center ">
          <h5>On-time delivery</h5>
          <p className="bg-testimony mt-5 mb-5 p-3 rounded-3xl text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo{" "}
          </p>
          <img className="Photo mb-2 " src={testimonial2} alt="testimonial" />
          <cite>Esther Hawkins</cite>
        </div>
        {/* </blockquote>
        <blockquote> */}
        <div className="flex flex-col items-center">
          <h5>I could buy easily</h5>
          <p className="bg-testimony mt-5 mb-5 p-3 rounded-3xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            a natus laboriosam vitae eos. In optio, perspiciatis deleniti nemo{" "}
          </p>
          <img className="Photo mb-2" src={testimonial3} alt="testimonial" />
          <cite>Devon Lane</cite>
        </div>

        {/* </blockquote> */}
      </div>

      <div className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 place-items-center ">
        <div className="itemsStats">
          <h3>5K+</h3>
          <h4>Happy Costumers</h4>
        </div>
        <div className="itemsStats">
          <h3>4.5K+</h3>
          <h4>Deliveries</h4>
        </div>
        <div className="itemsStats">
          <h3>3K+</h3>
          <h4>Rewiews</h4>
        </div>
        <div className="itemsStats">
          <h3>25+</h3>
          <h4>Awards Won</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
}
