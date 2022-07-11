import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRAND = "GET_BRAND";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET = "RESET";
export const TOP_SELLERS = "TOP_SELLERS";
export const USER_DETAIL_ADMIN = "USER_DETAIL_ADMIN";
export const MERCADO_PAGO = "MERCADO_PAGO";
export const ADD_TO_CART = "ADD_TO_CART";
export const RESET_CART = "RESET_CART";
export const ADD_TO_CART_DETAIL = "ADD_TO_CART_DETAIL";
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_DETAIL = "UPDATE_DETAIL";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_PRODUCT_ADMI = "GET_PRODUCT_ADMI";
export const GET_ADMIN_ORDER_DETAIL = 'GET_ADMIN_ORDER_DETAIL';
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";



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

  export const getProductAdmi =
    ({
      id = undefined,
      price = undefined,
      categoryId = undefined,
      brandId = undefined,
      genre = undefined,
      search = "",
    }) =>
    async (dispatch) => {
      const product = await axios.get("http://localhost:3001/productAdmin", {
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
      return dispatch({ type: GET_PRODUCT_ADMI, payload: product.data });
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
export function enableUsers(id) {
  return async function () {
    await axios.put(`${REACT_APP_BACKEND_URL}/users/${id}`);
  };
}

export function statusAdmi(id) {
  return async function () {
    await axios.put(`${REACT_APP_BACKEND_URL}/${id}`);
  };
}

export function userDetailAdmin(email) {
  console.log(email);
  return async function (dispatch) {
    var json = await axios.get(`${REACT_APP_BACKEND_URL}/profile?email=${email}`);

    return dispatch({
      type: USER_DETAIL_ADMIN,
      payload: json.data,
    });
  };
}
export function getAllUsers() {
  return async function (dispatch) {
    var json = await axios.get(
      "http://localhost:3001/users?email=abudget4@rediff.com"
    );

    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data,
    });
  };
}
export function updateProduct(id) {
  return async function (dispatch) {
    var json = await axios.delete(`http://localhost:3001/product/${id}`);

    return dispatch({
      type: UPDATE_PRODUCT,
      payload: json.data,
    });
  };
}

export function updateDetail(id, data) {
  console.log(data, "soy data");
  return async function (dispatch) {
    var json = await axios.put(`http://localhost:3001/product/${id}`, data);

    return dispatch({
      type: UPDATE_DETAIL,
      payload: json.data,
    });
  };
}

export function createProduct(payload) {
  return async function (dispatch) {
    var json = await axios.post("http://localhost:3001/product", payload);

    return json;
  };
}
export const getAllOrders = (email) => async (dispatch) => {
  const Orders = await axios.get(
    `${REACT_APP_BACKEND_URL}/order?email=${email}`
  );
  return dispatch({
    type: 66,
    payload: Orders.data,
  });
};

export const getAdminOrderDetail = (email, id) => async (dispatch) => {
  const Order = await axios.get(
    `${REACT_APP_BACKEND_URL}/order/detail?email=${email}&id=${id}`
  );
  return dispatch({
    type: GET_ADMIN_ORDER_DETAIL,
    payload: Order.data,
  });
};