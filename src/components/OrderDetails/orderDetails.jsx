import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetail } from "../Redux/action";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OrderDetails() {
  const dispatch = useDispatch();
  
  const orderDetail = useSelector((state) => state.orderDetail);
  

  useEffect(() => {
    dispatch(getOrderDetail());
  }, [dispatch]);


  const ordersID = orderDetail.orders;

  //console.log(ordersID, "id de la compra");
  //  const lastOrderID = ordersID[ordersID.length - 1]; //ultimo id
  //const lastOrderID= ordersID.at(-1)
  const lastOrderID=ordersID?.slice(-1)[0]
  

  //console.log(lastOrderID, "el id mas reciente");


  const orderItems = lastOrderID?.orderItems.map((e) => e); //los articulos de la compra
  // console.log(orderItems, " 3 articulos que compro orderItems");

  // console.log(lastOrderID.total, 'totaaaal')

   let images = [];
   for (var i in orderItems) {
    images.push(orderItems[i].product.image[0]);
  }
  // console.log(images);

  let name = [];
   for (var i in orderItems) {
     name.push(orderItems[i].product.name);
   }
  // console.log(name);

  let price = [];
  for (var i in orderItems) {
    price.push(orderItems[i].product.price);
  }
  // console.log(price);

  let quantity = [];
  for (var i in orderItems) {
    quantity.push(orderItems[i].quantity);
  }
  // console.log(quantity);

  // const total = total + (parseFloat(price[i]) * quantity[i])
  let subtotal = [];
  for (var i in price) {
    subtotal.push(parseFloat(price[i] * quantity[i]));
  }

  

  return (
    <main className="px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Thank you!
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            It's on the way!
          </p>
          <p className="mt-2 text-base text-gray-900 ">
            Your order <span className="font-bold">#{lastOrderID?.id}</span> has shipped and will be with you soon.
          </p>
        </div>

        <section
          aria-labelledby="order-heading"
          className="mt-10 border-gray-800 w-fit border rounded-md"
        >
          <h2 id="order-heading" className="sr-only">
            Your order
          </h2>

          <h3 className="sr-only">Items</h3>
          <div className="py-10  flex space-x-6 ">
            {images?.map((t) => {
              return (
                <div key={t.id} className='flex-wrap mx-20'>
                  <img
                    src={t}
                    alt=""
                    className="img flex-none w-20 h-20 object-center mt-6 rounded-lg sm:w-40 sm:h-40 "
                  />
                </div>
              );
            })}
          </div>

          <div className=" flex-row py-10  flex space-x-6 items-center mx-10 min-w-fit">
            <h2 className="mb-24">Products</h2>
            <div className="flex flex-col">
              {name?.map((t) => {
                return (
                  <h2 className="font-semibold capitalize text-gray-600">
                    {t}
                  </h2>
                );
              })}
            </div>

            <h2 className="mb-24">Price</h2>
            <div className="pl-4 my-auto flex flex-col sm:pl-6 ">
              {price?.map((t) => {
                return (
                  <h4 className="flex mr-4 font-semibold text-green-500">
                    $ {t}
                  </h4>
                );
              })}
            </div>

            <h2 className="mb-24"> Quantity </h2>
            <div className="pl-4 my-auto flex flex-col sm:pl-6  ">
              {quantity?.map((t) => {
                return (
                  <h4 className="flex ml-2 font-semibold text-gray-600">
                    x {t}
                  </h4>
                );
              })}
            </div>

            <h2 className="mb-24"> Subtotal </h2>
            <div className="pl-4 my-auto flex flex-col sm:pl-6">
              {subtotal?.map((t) => {
                return (
                  <h4 className="flex ml-2 font-semibold text-green-500">
                    $ {t}
                  </h4>
                );
              })}
            </div>
          </div>

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 text-md py-10">
              <div>
                <dt className="font-medium text-gray-900">
                  Shipping address
                </dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block capitalize">
                      {/* {orderDetail?.names} {orderDetail?.lastNames} */}
                    </span>
                    {/* <span className="block">7363 Cynthia Pass</span> */}
                    <span className="block">Toronto</span>
                  </address>
                </dd>
              </div>
              <div>
                <h4 className="sr-only">Payment</h4>

                <div>
                  <dt className="font-medium text-gray-900">Payment method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>Mercado Pago</p>
                    <p className="capitalize">{lastOrderID?.payment_type}</p>
                    <p>
                      <span aria-hidden="true">•••• </span>
                      <span className="sr-only">Ending in </span>0604
                    </p>
                  </dd>
                </div>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 text-md pt-10">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="font-semibold text-gray-700 mr-12">FREE</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-green-500 text-xl font-bold mr-12 mb-4">
                  {lastOrderID?.total}
                </dd>
              </div>
            </dl>
          </div>
        </section>
               <Link to="/">
              <button className="button-primary mt-16 mx-96">Go Home</button>
            </Link>
      </div>
    </main>
  );
}
