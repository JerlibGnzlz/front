import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHistoryPay } from "../Redux/action";
import { useAuth } from "../../context/AuthContext.js";

function Historial() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.historyPay);
  const { user } = useAuth();

  /* let order = history.orders[0].orderItems.map((e) => e);
  console.log(order); */
  let order = history.orders[0].orderItems.map((e) => e);

  useEffect(() => {
    if (user) {
      dispatch(userHistoryPay(user.email));
    }
  }, [dispatch, user.email, user]);

  return (
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
  );
}

export default Historial;
