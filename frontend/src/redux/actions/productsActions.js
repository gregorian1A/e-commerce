import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

        const { data } = await axios.get('/api/products');
   
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
  
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
    }
}

export const resetProductDetailsActions = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}

// const withdrawMoney = (acctNum) => (dispatch) => {
//     const user_acct = axios.get(`https://gregbank.com/accounts/${acctNum}`);

//     dispatch({
//         type: "WITHDRAW_MONEY",
//         payload: user_acct
//     })
// }