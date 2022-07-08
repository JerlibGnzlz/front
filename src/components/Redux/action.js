import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND = "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";
export const TOP_SELLERS = "TOP_SELLERS";

export const MERCADO_PAGO = "MERCADO_PAGO";
export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_CART = "RESET_CART";
export const ADD_TO_CART_DETAIL = "ADD_TO_CART_DETAIL";

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

export const getFavorites = (email) => async (dispatch) => {
  const fav = await axios.get(`${REACT_APP_BACKEND_URL}/favorites/${email}`)
  return dispatch({ type: FAVORITES, payload: fav.data });
};

export const addFavorites = ({email, id}) => async (dispatch) => {
  axios.post(`${REACT_APP_BACKEND_URL}/favorites/${email}?id=${id}`)
};

export const removeFavorites = ({email, id}) => async (dispatch) => {
  axios.delete(`${REACT_APP_BACKEND_URL}/favorites/${email}?id=${id}`)
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
