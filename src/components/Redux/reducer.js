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
  GET_USER_BY_EMAIL,
  USER_UPDATE,
  GET_ALL_ORDERS,
  GET_ADMIN_ORDER_DETAIL

} from "./action";

const initialState = {
  products: [],
  detail: [],
  categories:[],
  brand:[],
  cart: {},
  cartDetail:{},
  topSel: [],
  linkmp: [],
  user:{},
  allOrders:[],
  adminOrderDetail:[]
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
        cart:{}
      }

    case GET_PRODUCT: {
      return {
        ...state,
        products: action.payload,
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
        allOrders: action.payload
      }
    }

    case GET_ADMIN_ORDER_DETAIL: {
      return{
        ...state,
        adminOrderDetail: action.payload
      }
    }

    case TOP_SELLERS:
      return {
        ...state,
        topSel: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart:action.payload
      }
    case ADD_TO_CART_DETAIL:
      return {
        ...state,
        cartDetail:action.payload
      }


      case MERCADO_PAGO:
        return {
          ...state,
          linkmp: action.payload,
        };

      case GET_USER_BY_EMAIL:
        return{
          ...state,
          user: action.payload,
        }
      
      case USER_UPDATE:
          return{
            ...state
          }

    default:
      return state;
  }
}

export default rootReducer;
