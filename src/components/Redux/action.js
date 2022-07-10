import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND = "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";
export const TOP_SELLERS = "TOP_SELLERS";
export const GET_COMMENTS = "GET_COMMENTS";
export const MERCADO_PAGO = "MERCADO_PAGO";
export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_CART = "RESET_CART";
export const ADD_TO_CART_DETAIL = "ADD_TO_CART_DETAIL";
export const PERMISON = "PERMISON";
export const RESET_ALL_COMMENTS = "RESET_ALL_COMMENTS"

const { REACT_APP_BACKEND_URL } = process.env;

export const getProduct =
  ({
    id = undefined,
    price = undefined,
    categoryId = undefined,
    brandId = undefined,
    genre = undefined,
    search = "",
  }) =>
  async (dispatch) => {
    const product = await axios.get(`${REACT_APP_BACKEND_URL}/product`, {
      params: {
        id: id,
        price: price,
        category: categoryId,
        brand: brandId,
        genre: genre,
        search: search,
      },
    });
    // console.log(categoryId,brandId,'esto es el categoryId y el BrandID de  la action')
    return dispatch({ type: GET_PRODUCT, payload: product.data });
  };

export const getCategories =
  ({ genre = undefined, brand = undefined }) =>
  async (dispatch) => {
    const categories = await axios.get(`${REACT_APP_BACKEND_URL}/categories`, {
      params: {
        genre: genre,
        brand: brand,
      },
    });

    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  };

export const getBrand =
  ({ genre = undefined, category = undefined }) =>
  async (dispatch) => {
    const brand = await axios.get(`${REACT_APP_BACKEND_URL}/brands`, {
      params: {
        genre: genre,
        category: category,
      },
    });

    return dispatch({
      type: GET_BRAND,
      payload: brand.data,
    });
  };

export const getProductDetail = (id) => async (dispatch) => {
  const product = await axios.get(`${REACT_APP_BACKEND_URL}/product`, {
    params: {
      id: id,
    },
  });

  return dispatch({ type: GET_PRODUCT_DETAIL, payload: product.data });
};

export const reset = () => {
  return (dispatch) => {
    dispatch({ type: RESET });
  };
};
export const resetCart = () => {
  return (dispatch) => {
    dispatch({ type: RESET_CART });
  };
};

export function topSeller() {
  return async function (dispatch) {
    var json = await axios.get(`${REACT_APP_BACKEND_URL}/orderItem`);

    return dispatch({
      type: TOP_SELLERS,
      payload: json.data,
    });
  };
}

export const postMercadoPago = (data) => {
  // console.log(data, "action");

  return async function (dispatch) {
    console.log(data);
    return axios
      .post(`${REACT_APP_BACKEND_URL}/mp/payment`, data)

      .then((response) => {
        dispatch({ type: MERCADO_PAGO, payload: response.data });
      })
      .catch((err) => console.error(err));
  };
};

export function addToCart(product) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
}
export function addToCartDetail(product) {
  return function (dispatch) {
    return dispatch({
      type: ADD_TO_CART_DETAIL,
      payload: product,
    });
  };
}

export function userGoogleRegister(payload) {
  return async function () {
    try {
      const createUser = await axios.post(
        `${REACT_APP_BACKEND_URL}/users`,
        payload
      );

      return createUser;
    } catch (error) {
      return;
    }
  };
}

export function verification(payload) {
  return async function () {
    try {
      var json = await axios.get(
        `${REACT_APP_BACKEND_URL}/verify?email=${payload}`
      );
      return json;
    } catch (error) {}
  };
}


export const deleteComment = (id, productId) => async (dispatch) => {
  await axios.delete(`${REACT_APP_BACKEND_URL}/comments/delete/${id}/${productId})`)
};

export const getComments = (id) => async (dispatch) => {
  const comments = await axios.get(`${REACT_APP_BACKEND_URL}/comments`, {
    params: {
      id: id,
    },
  });

  return dispatch({ type: GET_COMMENTS, payload: comments.data });
};

export const permisonUser = (email, id) => async (dispatch) => {
  const permison = await axios.get(`${REACT_APP_BACKEND_URL}/comments/permison`, {
    params: {
      id: id,
      email: email
    },
  });

  return dispatch({ type: PERMISON, payload: permison.data });
};

export const postComments = (data, email, id) => async (dispatch) => {
  console.log(data, email, id)
  await axios.post(`${REACT_APP_BACKEND_URL}/comments/register`, {
      productId: id,
      email: email,
      rating: data.rating,
      review: data.review,
  }
  ,
  );
};



export const editComment = (data, email, id) => async (dispatch) => {
  console.log(data, email, id)
  await axios.put(`${REACT_APP_BACKEND_URL}/comments/update`, {
      productId: id,
      email: email,
      rating: data.rating,
      review: data.review,
      id: data.orderId
  }
  );
};

export const resetAllComments = () => (dispatch) => {
  return dispatch({ type: RESET_ALL_COMMENTS});
}

export const process_payment = ({data, body}) => async () => {
  axios.post(`http://localhost:3001/mp/process_payment${data}`, body)
};