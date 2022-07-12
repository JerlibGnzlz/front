import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHistoryPay } from "./Redux/action";
import { useAuth } from "../context/AuthContext.js";
import SideBar from "./SideBarUser.jsx/SideBar";
function Historial() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.historyPay);
  const { user } = useAuth();
  console.log(history,'esto es loo que me traigo de history del reduce ')
  /* let order = history.orders[0].orderItems.map((e) => e);
  console.log(order); */
  let order = history.orders[0].orderItems.map((e) => e);
console.log(order,'esto es lo que me traigo del order')
  useEffect(() => {
    if (user) {
      dispatch(userHistoryPay(user.email));
    }
  }, [dispatch, user.email, user]);

  return (
    <>
    <SideBar/>
    <div className="flex flex-col w-9/12 h-auto p-4 items-center ">
      <h1>Historial de Compra </h1>
      {order.map((e) => {
        return (
          <div
            key={e.id}
            className="flex flex-col w-9/12 h-auto p-4 items-center "
          >
            <span>{e.product.brand.name}</span>
            <span>{e.product.description}</span>
            <span>{e.product.genre}</span>
            <span>{e.product.model}</span>
            <span>{e.product.name}</span>
            <span>{e.product.price}</span>
            <span>{e.product.rating}</span>
            <span>{e.quantity}</span>
          </div>
        );
      })}
    </div>
      </>
  );
}

export default Historial;
