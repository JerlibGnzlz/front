import Navbar from "../NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, reset, addToCartDetail,resetCart } from "../Redux/action";
import { useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import "./Detail.css";

export default function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail);
  const cartProductDetail = useSelector((state) => state.cartDetail);
  // console.log(cartProductDetail,'esto es el cartProductDetail del detalle')
  const { id } = useParams();
  

  // console.log(productDetail, "prodDetail");
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  useEffect(() => { 
    dispatch(resetCart());
  },[dispatch])

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (Array.isArray(JSON.parse(localStorageCart))) {
      const localConverted = JSON.parse(localStorageCart);
      if (!localConverted?.find((f) => f?.name === cartProductDetail?.name)&&cartProductDetail!==null&&cartProductDetail.hasOwnProperty("name")) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...localConverted, cartProductDetail])
        );
        // console.log("entre al array");
      }
    } else {
      const localCart = JSON.parse(localStorageCart);
      // console.log(localCart,'ESTO ES EL LOCALCART')
      if (localCart!==null&&localCart.hasOwnProperty('name') && cartProductDetail !== null && cartProductDetail?.name!==localCart.name) {
        // console.log(localCart, "soy el localCart del detalle");
        localStorage.setItem("cart", JSON.stringify([localCart, cartProductDetail]));
      } else if (cartProductDetail.hasOwnProperty('name')) {
        // console.log(cartProductDetail,'soy el cartProoduct' )
        localStorage.setItem("cart", JSON.stringify(cartProductDetail));
      }
    }
  }, [cartProductDetail]);

  // const cart2=localStorage.getItem("cart")
  // const objCart2=JSON.parse(cart2)

  const localStorageCart = localStorage.getItem("cart");
  //const localStorageObj = JSON.parse(localStorageCart);
  // console.log(localStorageObj, "llego el lechero");

  function handleAddToCart() {
    productDetail[0].quantity = 1;
    dispatch(addToCartDetail(productDetail[0]));
    // console.log('me ejecute addToCart')
    // if (!objCart2.some((p) => p.name.includes(productDetail[0].name))) {
    //   setCart([...objCart2,productDetail[0]]);
    //   console.log("entre al if")
    // }
  }
  function backOnClicke(e) {
    e.preventDefault()
    dispatch(reset())
    navigate('/products')
  }


  return (
    <>
      <Navbar />
      {
        <div className="pt-4">
          {/* Image gallery */}
          <div className="mt-10 max-w-2xl mb-20 mx-auto sm:px-6 lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-2">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={productDetail[0] && productDetail[0].image[0]}
                alt={productDetail[0] && productDetail[0].image[0]}
                className="object-contain h-96 w-96 detalle"
              />
            </div>

            {/* Product name */}
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-xl lg:pt-5 lg:px-8 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-5 lg:pr-10 ">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 capitalize ">
                  {productDetail[0] && productDetail[0].name}
                </h1>
              </div>

              {/* Product Description & category */}
              <div className=" mt-2 py-10 lg:pt-6 lg:pb-6 lg:col-start-1 lg:col-span-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Description
                  </h3>
                  <div className="space-y-6">
                    <p className="text-xl text-gray-900">
                      {productDetail[0] &&
                        productDetail[0].description.charAt(0).toUpperCase() +
                          productDetail[0].description.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <h2 className="text-xl font-bold text-gray-900">Category</h2>

                  <div className="space-y-6">
                    <p className="text-xl text-gray-600 capitalize">
                      {productDetail[0] && productDetail[0].genre}
                    </p>
                  </div>
                </div>

                {/* Product Score */}
                {/* Sustituir el 4 por productDetail[0].rating */}
                <h3 className=" mt-2 text-xl font-bold text-gray-900">Score</h3>
                <div className="flex ">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <p key={i} className="text-2xl">
                        &#9733;
                      </p>
                    ))}
                </div>
              </div>

              {/* Product price */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-bold text-gray-900">
                  ${productDetail[0] && productDetail[0].price}
                </p>
                <h2>Brand</h2>
                <p>{productDetail[0]&& productDetail[0].brand.name}</p>

                {/* Product bottom cart */}
                <div className="">
                  <button
                    type="submit"
                    className="mt-10 w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => handleAddToCart(e)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Back */}
          <div className="w-full h-16 fixed bottom-0 mt-28 bg-primary">
            
              <button
                onClick={(e) => backOnClicke(e)}
                className="text-center mt-5 text-white hover:text-tertiary"
              >
                Go Back
              </button>
           
          </div>
        </div>
      }
    </>
  );
}
