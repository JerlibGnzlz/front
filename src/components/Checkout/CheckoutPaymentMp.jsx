import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMercadoPago } from "../Redux/action";
// import { Link } from "react-router-dom";

function CheckoutPaymentMp() {
  const dispatch = useDispatch();
  const mp= useSelector((state) => state.linkmp)

  // const cart = [
  //   {
  //     id: 1,
  //     name: "Classic meet for men",
  //     description: "cualquiera",
  //     image: "https://m.media-amazon.com/images/I/51inY39-t8L._AC_UY535_.jpg",
  //     quantity: 3,
  //     price: 55,
  //   },
    
  // ];

  // const [body, setBody] = useState({
  //   product: [],
  //   back_urls: {
  //     failure: "http://localhost:3000/success",
  //     pending: "http://localhost:3000/success",
  //     success: "http://localhost:3000/success",
  //   },
  //   auto_return: "approved",
  //   total: 55,
  //   user:1

  // });
  const LocalStorageCheckOut = JSON.parse(localStorage.getItem('cart'));
  function handleClick(e) {
    e.preventDefault()
    // setBody(
    //   cart &&
    //     cart.map((e) =>
    //       body.product.push({
    //         name: e.name,
    //         price: e.price,
    //         description: e.description,
    //         quantity: e.quantity,
    //         image: e.image,
    //         id: e.id,
    //       })
    //     )
    // );
    
    dispatch(postMercadoPago({product: LocalStorageCheckOut,user:"neubigin0@4shared.com" }));
    // console.log(LocalStorageCheckOut, "LocalStorageCheckOut");
  }

//  console.log(mp)

  return (
    <div>
        <div className=" border-gray-200 py-6 px-4 sm:px-6">
      <button onClick={handleClick} type="submit"
               className="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary"
             >Confirm</button>
        </div>
      
      <a href={mp.init_point} className="text-white font-bold">MercadoPago</a>
    </div>
  );
}

export default CheckoutPaymentMp;
