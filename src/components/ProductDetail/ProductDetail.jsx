import Navbar from "../NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, reset, addToCartDetail,resetCart, getComments, permisonUser, postComments, editComment, deleteComment } from "../Redux/action";
import { useEffect, useState} from "react";
import { useParams,useNavigate} from "react-router-dom";
import Rating from "@mui/material/Rating"
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from "@mui/material/Typography"
import "./Detail.css";
import { useAuth } from "../../context/AuthContext";

export default function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user} = useAuth()
  const productDetail = useSelector((state) => state.detail);
  const cartProductDetail = useSelector((state) => state.cartDetail);
  const comments = useSelector((state) => state.comments);
  const permison = useSelector((state) => state.permison);
  const { id } = useParams();
  const [edit, setEdit] = useState(false)
  const [postComment, setPostComment] = useState({
    rating: "",
    review: "",
  }) 

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
      }
    } else {
      const localCart = JSON.parse(localStorageCart);
      if (localCart!==null&&localCart.hasOwnProperty('name') && cartProductDetail !== null && cartProductDetail?.name!==localCart.name) {
        localStorage.setItem("cart", JSON.stringify([localCart, cartProductDetail]));
      } else if (cartProductDetail.hasOwnProperty('name')) {
        localStorage.setItem("cart", JSON.stringify(cartProductDetail));
      }
    }
  }, [cartProductDetail]);


  const handleChange = (e) => {
    setPostComment({
        ...postComment, 
        [e.target.name]: e.target.value
    })
  }

  const handleSumit = (e) => {
    e.preventDefault()
    dispatch(postComments(postComment, user.email, id))
    setTimeout(() => {
      dispatch(getComments(id))
      dispatch(permisonUser(user.email, id))
      dispatch(getProductDetail(id))
    }, 100)

  }

  const localStorageCart = localStorage.getItem("cart");

  function handleAddToCart() {
    productDetail[0].quantity = 1;
    dispatch(addToCartDetail(productDetail[0]));
  }
  function backOnClicke(e) {
    e.preventDefault()
    dispatch(reset())
    navigate('/products')
  }

  function handleDelete(e, orderId){
    e.preventDefault()
    dispatch(deleteComment(orderId, id))
    setTimeout(() => {
      dispatch(getComments(id))
      dispatch(permisonUser(user.email, id))
      dispatch(getProductDetail(id))
      setEdit(false)
    }, 100)
  }

  function handleComments(e) {
    if(user){
    e.preventDefault()
    dispatch(getComments(id))
    dispatch(permisonUser(user.email, id))}
    else{
      navigate("/login")
    }
  }

  function handleEdit(e, rating, review, id){
    setPostComment({
      rating: rating,
      review: review,
      orderId: id
    })
    setEdit(true)
  }

  function handleEdited(e){
    e.preventDefault()
    dispatch(editComment(postComment, user.email, id))
    setTimeout(() => {
      dispatch(getComments(id))
      dispatch(permisonUser(user.email, id))
      dispatch(getProductDetail(id))
      setEdit(false)
    }, 100)
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
                {
                  productDetail[0] ? <Rating value={productDetail[0].rating} readOnly /> : null
                }
              </div>

              {/* Product price */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-bold text-gray-900">
                  ${productDetail[0] && productDetail[0].price}
                </p>

                <button
                    type="submit"
                    className="mt-10 w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => handleComments(e)}>
                    see comments
                </button>
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
          {
            comments ? 
              permison ? 
              <form onSubmit={e => handleSumit(e)}>
                <div>
                  <Rating
                    name="rating"
                    value={parseInt(postComment.rating)}
                    onChange={e =>handleChange(e)}
                  />
                </div>
                <div>
                <label></label>
                    <input
                            type="text"
                            name="review"
                            value={postComment.review}
                            onChange={e =>handleChange(e)}
                    />
                </div>
                <button type="submit" ><span>comment</span></button>
              </form>
              : null 
            : null
          }
          {
            edit ? <form onSubmit={e => handleEdited(e)}>
                      <div>
                        <Rating
                          name="rating"
                          value={parseInt(postComment.rating)}
                          onChange={e =>handleChange(e)}
                        />
                      </div>
                      <div>
                      <label></label>
                      <input
                        type="text"
                        name="review"
                        value={postComment.review}
                        onChange={e =>handleChange(e)}
                      />
                      </div>
                    <button type="submit" ><span>comment</span></button>
                    </form> 
                : null
          }
          {
            comments ? comments[0] ? <div> 
                                        Comments{comments.map((c, index) => {  
                                                                      return <div key={index} className={c.user.email === user?.email && edit ? "disable" : "anable"}>review at {c.user.email.split("@")[0]} 
                                                                                <Rating name="read-only" value={c.rating} readOnly />
                                                                                <div>{c.review}</div>
                                                                                {
                                                                                  c.user.email === user?.email ? 
                                                                                                                <div>
                                                                                                                  <button onClick={(e) => handleEdit(e, c.rating, c.review, c.id)}>Edit Comment</button>
                                                                                                                  <button onClick={(e) => handleDelete(e, c.id)}><CancelIcon/></button>
                                                                                                                </div>
                                                                                                              : null
                                                                                  
                                                                                }
                                                                              </div>
                                                                      })}
                                      </div>: 
                                    <div>there are no comments for this product</div> : 
                      null
          }
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
