import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../Redux/action";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import LeftPanel from "../LeftPanel";
import "./ProductAdmi.css";
import { Link } from "react-router-dom";
// import EditProduct from "./EditProduct";

function ProductsAdmi() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [data, setData] = useState(allProducts);
  // console.log(data, "data");

  function handleDelete(id) {
    setData(data.filter((e) => e.id !== id));
  }
  useEffect(() => {
    dispatch(getProduct({ genre: undefined }));
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 280,
      renderCell: (params) => {
        // console.log(params.row.id, "id");
        // console.log(params, "params")
        return (
          <div className="Products MuiDataGrid-row">
            <img
              className="prodImage "
              src={params.row.image[0]}
              alt="product"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 350,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 220,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            
              <Link to={"/admin/products/" + params.row.id}>
                <button className="productEdit bg-gray-600 px-4 py-2 rounded-lg text-white font-semibold m-5 tracking-wider hover:bg-gray-700 transition duration-500">
                  Edit{" "}
                </button>
              </Link>
              <label className="switchBtn text-white bg-gray-400 ">
                <input type="checkbox" />
                <div className="slide round font-semibold">Filter On</div>
              </label>
          </>
        );
      },
    },
  ];

  const rows = allProducts?.length ? allProducts : [];

  return (
    <>
      <div className="flex bg-gray-300">
        <div className="relative">
          <LeftPanel />
        </div>
        <div className="mx-2 w-screen">
          <div className="flex justify-end ">
            <Link to="/admin/create">
              <button
                className="flex bg-gray-600 p-4 mt-2 rounded-lg text-white hover:bg-gray-800 transition duration-500 ease-in-out shadow-xl "
                variant="contained"
              >
                Create Product
              </button>
            </Link>
          </div>

          <div className="mt-3 w-full capitalize shadow-xl">
            <div
              style={{ height: 800, width: "100%", mixBlendMode: "multiply" }}
            >
              <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[6]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsAdmi;
