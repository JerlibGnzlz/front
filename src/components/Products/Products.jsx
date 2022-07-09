import React from "react";
import NavBar from "../searchBar/Search";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories, getProduct, getBrand } from "../Redux/action";
import { useParams, useSearchParams } from "react-router-dom";
import Paginado from "../Paginado/Paginado";
import "./Products.css";

export default function Products() {
  const Products = useSelector((state) => state.products);
  const cartProduct = useSelector((state) => state.cart);
  const [params] = useSearchParams();
  const paymentStatus = params.get("status");
  // console.log(paymentStatus, "Este es el paymentStatus");
  // console.log(cartProduct, "ESTE ES EL CART PRODUCT ");
  const dispatch = useDispatch();
  const { genre } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setproductPerPage] = useState(6);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  
  // function getAllProducts() {
    

  //   dispatch(getProduct({ genre: genre }));
  // }

  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }
  paymentStatus === "approved" && localStorage.removeItem("cart");
  useEffect(() => {
    dispatch(getProduct({ genre: genre }));
    // console.log(genre,'esto es el genre del useEffect')
    dispatch(getCategories({ genre: genre }));
    dispatch(getBrand({ genre: genre }));
  }, [dispatch, genre]);

  // const localStorageCard = localStorage.getItem("cartProducts");
  // const localStorageCardObj =
  //   localStorageCard !== null && JSON.parse(localStorageCard);
  // console.log(localStorageCard, "SOY EL LOCAL STORAGE OBJ DE LA CARD");
  // if (cartProduct !== null) {
  //   localStorage.setItem("cartProducts", JSON.stringify(cartProduct));
  // }
  // const localStorageCart = localStorage.getItem("cart");
  // const localStorageObj = JSON.parse(localStorageCart);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (Array.isArray(JSON.parse(localStorageCart))) {
      const localConverted = JSON.parse(localStorageCart);
      if (
        !localConverted?.find((f) => f?.name === cartProduct?.name) &&
        cartProduct !== null &&
        cartProduct.hasOwnProperty("name")
      ) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...localConverted, cartProduct])
        );
        // console.log("entre al array");
      }
    } else {
      const localCart = JSON.parse(localStorageCart);
      // console.log(localCart, "ESTO ES EL LOCALCART");
      if (
        localCart !== null &&
        localCart.hasOwnProperty("name") &&
        cartProduct !== null &&
        cartProduct?.name !== localCart.name
      ) {
        // console.log(localCart, "soy el localCart del detalle");
        localStorage.setItem("cart", JSON.stringify([localCart, cartProduct]));
      } else if (cartProduct.hasOwnProperty("name")) {
        // console.log(cartProduct,'soy el cartProoduct' )
        localStorage.setItem("cart", JSON.stringify(cartProduct));
      }
    }
  }, [cartProduct]);

  // const cart2=localStorage.getItem("cart")
  // const objCart2=JSON.parse(cart2)
  // console.log(objCart2, "obj")

  return (
    <div>
      <NavBar />
      <div className="productsCards">
        <h1>Products</h1>
      </div>
      <div className="cards2">
        <div className="card2">
          <Filter paginado={paginado} />
        </div>
        <div className="containerCards">
          {currentProduct &&
            currentProduct?.map((p) => {
              return (
                <Card
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  category={p.category.name}
                  brand={p.brand.name}
                />
              );
            })}
        </div>
      </div>
      <Paginado
        productPerPage={productPerPage}
        currentPage={currentPage}
        Products={Products.length}
        paginado={paginado}
      />
    </div>
  );
}
