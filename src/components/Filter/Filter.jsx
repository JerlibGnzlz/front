import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getProduct, getCategories, getBrand } from "../Redux/action";
import "./Filter.css";

export default function Filter({ paginado }) {
  const [genres, setGenres] = useState();
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brand);
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genre } = useParams();

  // console.log(genre, "estooo es genres del params");

  function handleOrderPrice(e) {
    // if (genres === genre && genre) {
      setGenres(genre);
      setPrice(e.target.value);
      dispatch(
        getProduct({
          genre: genre,
          price: e.target.value,
          categoryId: category,
          brandId: brand,
        })
      );
    // } else {
    //   setBrand(undefined);
    //   setCategory(undefined);
    //   setPrice(e.target.value);
    //   setGenres(genre);
    //   dispatch(getProduct({ genre: genre, price: e.target.value }));
    // }

    paginado(1);
  }

  function handleCheck(e) {
    // console.log(e.target.value === category, "esto es loo que llega");
    // if (genres === genre && genre) {
      setGenres(genre);
      setCategory(e.target.value);
      dispatch(
        getProduct({
          genre: genre,
          categoryId: e.target.value,
          brandId: brand,
          price: price,
        })
      );
      dispatch(getBrand({ genre: genre, category: e.target.value }));
    //} 
  //else {
  //     setBrand(undefined);
  //     setCategory(e.target.value);
  //     setPrice(undefined);
  //     setGenres(genre);
  //     dispatch(getProduct({ genre: genre, categoryId: e.target.value }));
  //     dispatch(getBrand({ genre: genre, category: e.target.value }));
  //   }

    paginado(1);
  }

  // console.log(category, "este es la category", brand, "esta es la marca");

  function handleReset(e) {
    e.preventDefault();
    const name = e.target.name;
    switch (name) {
      case "women":
        navigate("/products/women");
        paginado(1);
        dispatch(getProduct({ search: "", genre: genre }));
        dispatch(getBrand({genre:genre}))
        dispatch(getCategories({genre:genre}))
        setBrand(undefined);
        setCategory(undefined);
        setPrice(undefined);

        break;
      case "men":
        navigate("/products/men");
        paginado(1);
        dispatch(getProduct({ search: "", genre: genre }));
        dispatch(getBrand({ genre: genre }));
        dispatch(getCategories({ genre: genre }));
        dispatch()
        setBrand(undefined);
        setCategory(undefined);
        setPrice(undefined);

        break;
      case "kids":
        navigate("/products/kids");
        dispatch(getProduct({ search: "", genre: genre }));
        dispatch(getBrand({ genre: genre }));
        dispatch(getCategories({ genre: genre }));
        paginado(1);
        setBrand(undefined);
        setCategory(undefined);
        setPrice(undefined);

        break;
      case "accesories":
        navigate("/products/accesories");
        paginado(1);
        dispatch(getProduct({ search: "", genre: genre }));
        dispatch(getBrand({ genre: genre }));
        dispatch(getCategories({ genre: genre }));
        setBrand(undefined);
        setCategory(undefined);
        setPrice(undefined);

        break;
      default:
        navigate("/products");
        paginado(1);
        dispatch(getProduct({ search: "" }));
        dispatch(getBrand({ genre: genre }));
        dispatch(getCategories({ genre: genre }));
        setBrand(undefined);
        setCategory(undefined);
        setPrice(undefined);
        break;
    }
  }

  function handleCheckBrand(e) {
    // if (genres === genre && genre) {
    setGenres(genre);
    setBrand(e.target.value);
    dispatch(
      getProduct({
        genre: genre,
        brandId: e.target.value,
        categoryId: category,
        price: price,
      })
    );

    dispatch(getCategories({ genre: genre, brand: e.target.value }));
    paginado(1)
    // } else {
    //   setBrand(e.target.value);
    //   setCategory(undefined);
    //   setPrice(undefined);
    //   setGenres(genre);
    //   dispatch(getProduct({ genre: genre, brandId: e.target.value }));
    //   dispatch(getCategories({ genre: genre, brand: e.target.value }));
    // }
  }

  return (
    <div>
      <div className="category flex flex-col">
        <h1 className="text-3xl font-semibold">Genres</h1>
        <div className="ml-2 ">
          <div className="item-left  ">
            <button
              className="text-lg"
              name="all"
              onClick={(e) => handleReset(e)}
            >
              All Products
            </button>
          </div>

          <div className="">
            <button
              className="text-lg"
              name="women"
              onClick={(e) => handleReset(e)}
            >
              Women
            </button>
          </div>

          <div className="">
            <button
              className="text-lg"
              name="men"
              onClick={(e) => handleReset(e)}
            >
              Men
            </button>
          </div>

          <div className="">
            <button
              className="text-lg"
              name="kids"
              onClick={(e) => handleReset(e)}
            >
              Kids
            </button>
          </div>

          <div className="">
            <button
              className="text-lg"
              name="accesories"
              onClick={(e) => handleReset(e)}
            >
              Accesories
            </button>
          </div>
        </div>
      </div>
      <div className="price mt-4 ">
        <h1 className="text-3xl font-semibold">Price</h1>

        <select
          onChange={(e) => handleOrderPrice(e)}
          className="border-solid border-2 border-black mt-4 rounded-lg capitalize font-semibold"
        >
          <option value="">select price</option>
          <option value="ASC">Lower price</option>
          <option value="DESC">Higher price</option>
        </select>
      </div>
      <div className="brands mt-6 ">
        <h1 className="text-3xl font-semibold">Brands</h1>

        {brands?.map((b) => {
          return (
            <div key={b.id}>
              <button
                value={b.id}
                name={b.name}
                className="hover:bg-blue-200 active:bg-violet-200 focus:bg-red-500 rounded-sm flex inline capitalize ml-2"
                onClick={(e) => handleCheckBrand(e)}
              >
                {b.name}
              </button>
            </div>
          );
        })}
      </div>

      <div className="categories mt-6 ">
        <h1 className="text-3xl font-semibold">Categories</h1>
        {categories?.map((c) => {
          return (
            <div key={c.id}>
              <button
                value={c.id}
                name={c.name}
                onClick={(e) => handleCheck(e)}
                className="hover:bg-blue-200 active:bg-violet-200 focus:bg-red-500 rounded-sm flex inline capitalize ml-2"
              >
                {c.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
