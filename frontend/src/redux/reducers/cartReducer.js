import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cart: [] }, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    const item = action.payload;

    const existingItem = state.cart.find(
      (cartItem) => cartItem.productId === item.productId
    );

    if (existingItem) {
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.productId === existingItem.productId ? item : cartItem
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, item],
      };
    }
  } else if (action.type === actionTypes.REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItem) => cartItem.productId !== action.payload
      ),
    };
  } else if (action.type === actionTypes.RESET_CART) {
    return { ...state, cart: [] };
  }

  return state;
};
