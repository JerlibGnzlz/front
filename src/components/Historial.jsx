import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHistoryPay } from "./Redux/action";
import { useAuth } from "../context/AuthContext.js";
import SideBar from './SideBarUser.jsx/SideBar'

function Historial() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.historyPay);
  const { user } = useAuth();

  let order =
    Object.entries(history).length > 0
      ? history.orders[0].orderItems.map((e) => e)
      : undefined;

  useEffect(() => {
    if (user) {
      dispatch(userHistoryPay(user?.email));
      console.log("dispare");
    }
  }, [dispatch, user?.email, user]);

  let prueba = Object.entries(history).length > 0 ? "algo" : "vacio";
  console.log(order);
  console.log(prueba);

  return (
    <div className="flex relative bg-gray-200">
      <SideBar />
      <div className="flex flex-col w-9/12 h-auto p-4  bg-gradient-to-r from-black via-gray-700 to-black w-1/2 mx-auto my-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mx-auto text-gray-300">Historial de Compra </h1>
        <div className="bg-gray-300 w-4/5 my-5 mx-auto text-center rounded-lg shadow-lg capitalize font-semibold">
          {order?.length ?order?.map((e) => {
            return (
              <div
                key={e.id}
                className="flex flex-col w-9/12 h-auto p-4 mx-auto "
              >
                <span>Marca: {e.product.brand.name}</span>
                <span>Descripción: {e.product.description}</span>
                <span>Género: {e.product.genre}</span>
                <span>Modelo: {e.product.model}</span>
                <span>Nombre: {e.product.name}</span>
                <span>Precio: {e.product.price}</span>
                <span>Rating: {e.product.rating}</span>
                <span>Cantidad: {e.quantity}</span>
              </div>
            );
          }):'No haz comprado aún'}
        </div>
      </div>
    </div>
  );
}

export default Historial;
