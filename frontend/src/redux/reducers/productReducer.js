import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    if(action.type === actionTypes.GET_PRODUCTS_REQUEST) {
        return {
            loading: true,
            products: []
        }
    }
    else if(action.type === actionTypes.GET_PRODUCTS_SUCCESS) {
        return {
            loading: false,
            products: action.payload
        }
    }
    else if(action.type === actionTypes.GET_PRODUCTS_FAIL) {
        return {
            loading: false,
            error: action.payload
        }
    }
    return state;
}
  
export const getDetailsReducer = (state = {product: {}}, action) => {
    if(action.type === actionTypes.GET_PRODUCT_DETAILS_REQUEST) {
        return {
            loading: true
        }
    }
    else if(action.type === actionTypes.GET_PRODUCT_DETAILS_SUCCESS) {
        return {
            loading: false,
            product: action.payload
        }
    }
    else if(action.type === actionTypes.GET_PRODUCT_DETAILS_FAIL) {
        return {
            loading: false,
            error: action.payload
        }
    }
    else if(action.type === actionTypes.GET_PRODUCT_DETAILS_RESET) {
        return {
            product: {}
        }
    }
    return state;
}