import {
  GET_PRODUCT,
  GET_CATEGORIES,
  GET_BRAND,
  GET_PRODUCT_DETAIL,
  MERCADO_PAGO,
  RESET,
  TOP_SELLERS,
  ADD_TO_CART,
  RESET_CART,
  ADD_TO_CART_DETAIL,
  USER_DETAIL_ADMIN,
  GET_ALL_USERS,
  UPDATE_PRODUCT,
  UPDATE_DETAIL,
  CREATE_PRODUCT,
  GET_PRODUCT_ADMI,
  GET_ALL_ORDERS,
  GET_ADMIN_ORDER_DETAIL,
  GET_USER_BY_EMAIL,
  USER_UPDATE,
  FAVORITES,
  USER_TYPE,
  USER_HISTORY,
} from "./action";

const initialState = {
  products: [],
  detail: [],
  categories: [],
  brand: [],
  cart: {},
  cartDetail: {},
  topSel: [],
  linkmp: [],
  allUsers: [],
  userDetailAdmin: [],
  productAdmi: [],
  user: {},
  allOrders: [],
  adminOrderDetail: [],
  updateProduct: [],
  updateDetail: [],
  favorites: [],
  verify: {},
  historyPay:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }

    case RESET:
      return {
        ...state,
        detail: [],
      };
    case RESET_CART:
      return {
        ...state,
        cart: {},
      };

    case GET_PRODUCT: {
      return {
        ...state,
        products: action.payload,
        productAdmi: action.payload,
      };
    }

    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case GET_BRAND: {
      return {
        ...state,
        brand: action.payload,
      };
    }
    case GET_ALL_ORDERS: {
      return {
        ...state,
        allOrders: action.payload,
      };
    }

    case GET_ADMIN_ORDER_DETAIL: {
      return {
        ...state,
        adminOrderDetail: action.payload,
      };
    }

    case FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case TOP_SELLERS:
      return {
        ...state,
        topSel: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART_DETAIL:
      return {
        ...state,
        cartDetail: action.payload,
      };

    case MERCADO_PAGO:
      return {
        ...state,
        linkmp: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case USER_DETAIL_ADMIN:
      return {
        ...state,
        userDetailAdmin: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
      };

    case UPDATE_DETAIL:
      return {
        ...state,
        updateDetail: action.payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
      };
    case GET_PRODUCT_ADMI: {
      return {
        ...state,
        productAdmi: action.payload,
      };
    }
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      };

    case USER_UPDATE:
      return {
        ...state,
      };

    case USER_TYPE:
      return {
        ...state,
        verify: action.payload,
      };
    case USER_HISTORY:
      /* console.log(action.payload); */
      return {
        ...state,
        historyPay: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
