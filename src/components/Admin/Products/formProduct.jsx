import React from "react";
import { getCategories, getBrand, createProduct } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftPanel from "../LeftPanel";
export default function FormProduct() {
  const allBrand = useSelector((state) => state.brand);
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    image: [],
    description: "",
    genre: [],
    brandId: 0,
    categoryId: 0,
    price: 0,
  });

  const genre = ["men", "women", "accesories", "kids"];

  //VALIDACIONES
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createProduct(input));
    alert("¡Product created!");
    setInput({
      name: "",
      image: [],
      description: "",
      genre: [],
      brandId: [],
      categoryId: "",
      price: 0,
      stock:0,
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  console.log(input, "input");

  function handleCheck(e) {
    setInput({
      ...input,
      genre: e,
    });
  }

  function handleSelectCat(e) {
    setInput({
      ...input,
      categoryId: e.target.value,
    });
  }
  function handleSelectBrand(e) {
    setInput({
      ...input,
      brandId: e.target.value,
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      brand: input.brand.filter((b) => b !== e),
    });
  }

  useEffect(() => {
    dispatch(getCategories({ genre: undefined }));
    dispatch(getBrand({ genre: undefined }));
  }, []);

  return (
    <div className="flex bg-gray-300 h-full relative">
      <div className="relative ">
        <LeftPanel />
      </div>
      <div className="bg-gray-200 w-screen h-screen my-14 mx-16 shadow-xl px-4 py-5 sm:rounded-lg sm:p-6 border-2 border-gray-400">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold leading-6 text-gray-900">
              Create Product
            </h2>
          </div>
          <NavLink to="/admin/products">
            <button className=" border-2 bgflex bg-gray-600 p-2 w-24 rounded-lg text-white hover:bg-gray-800 transition duration-500 ease-in-out shadow-xl border-gray-300">
              Back
            </button>
          </NavLink>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="col-span-3 sm:col-span-2">
                <label>Name:</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Name product"
                    type="text"
                    // placeholder='Name'
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description:
                </label>
                <div className="mt-1">
                  <textarea
                    rows="3"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    type="text"
                    placeholder="Description"
                    value={input.description}
                    name="description"
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your product.
                </p>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label className="block text-m font-medium text-gray-700">
                  Genre:
                </label>

                {genre.map((g) => (
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <button className="capitalize" type="button" onClick={(e) => handleCheck(g)}>
                      {g}
                    </button>
                  </div>
                ))}

                <div className="my-3">
                  <label className="block text-m font-medium text-gray-700">
                    Category:
                  </label>
                  <select
                    className="capitalize"
                    name="categoryId"
                    onChange={(e) => handleSelectCat(e)}
                  >
                    {allCategories?.length &&
                      allCategories.map((e) => (
                        <option value={e.id}>{e.name}</option>
                      ))}
                  </select>
                </div>

                <div className="my-3">
                  <label className="block text-m font-medium text-gray-700">
                    Brand:
                  </label>
                  <select className="capitalize" name="brandId" onChange={(e) => handleSelectBrand(e)}>
                    {allBrand?.length &&
                      allBrand.map((e) => (
                        <option value={e.id}>{e.name}</option>
                      ))}
                  </select>
                </div>
                {input.brand?.map((e) => (
                  <div>
                    <p>{e.namw}</p>
                    <button onClick={() => handleDelete(e)}>x</button>
                  </div>
                ))}

                <div className="flex flex-col">
                  <label>Stock:</label>
                  <input
                    className="w-16"
                    type="number"
                    placeholder="Escribe una descripcion"
                    value={input.stock}
                    name="price"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="my-3">
                  <label className="block text-m font-medium text-gray-700">
                    Price:
                  </label>
                  <input
                    className="nombre"
                    type="number"
                    placeholder="Escribe una descripcion"
                    value={input.price}
                    name="price"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div>
                  <label className="block text-m font-medium text-gray-700">
                    Imagen:
                  </label>

                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-m text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            // type="file"
                            class="sr-only"
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="volver">
                  <button
                    className="border-2 bgflex bg-gray-600 p-1 mt-3 w-32 rounded-lg text-white hover:bg-gray-800 transition duration-500 ease-in-out shadow-xl border-gray-300"
                    type="submit"
                  >
                    Create Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
