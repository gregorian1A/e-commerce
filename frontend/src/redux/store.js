import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer';
import {getDetailsReducer, getProductsReducer} from '../redux/reducers/productReducer';

const reducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getDetails: getDetailsReducer
});
const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INITIAL_STATE = {
    cart: {
        cart: cartFromLocalStorage
    }
};

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;