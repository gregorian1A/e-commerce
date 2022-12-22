import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import "./CartScreen.css";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {
          cartItems.length < 1 ? (<h2>Your cart is empty <Link to="/">Go back</Link></h2>) : 
          (
            cartItems.map(cartItem => <CartItem 
              key={cartItem.productId} 
              cartItem={cartItem} 
              qtyChangeHandler={qtyChangeHandler}
              dispatch={dispatch} />)
          )
        }
      </div>
      <div className="cartscreen__right">
        <div className="right_info">
          <p>Subtotal ({cartItems.length}) item{cartItems.length > 1 ? 's' : ''}</p>
          <p>${cartItems.map(item => item.price * item.qty).reduce((acc,curr) => acc + curr, 0).toFixed(2)}</p>
        </div>
        <div className="cartscreen__btn">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({cartItem, qtyChangeHandler, dispatch}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src={cartItem.imageUrl}
          alt="cartitem"
        />
      </div>
      <Link to={`/cart/${cartItem.productId}`} className="cartitem__name">
        <p>{cartItem.name}</p>
      </Link>
      <p className="cartitem__price">${cartItem.price}</p>
      <select className='cartitem__select' value={cartItem.qty} 
      onChange={(e) => qtyChangeHandler(cartItem.productId, e.target.value)}>
       {[...Array(cartItem.countInStock).keys()].map(num => (
         <option key={num + 1} value={num + 1}>
           {num + 1}
         </option>
       ))}
      </select>
      <button className="cartitem__deleteBtn">
          <i className="fa fa-trash" onClick={() => dispatch(removeFromCart(cartItem.productId))}></i>
      </button>
    </div>
  );
};

export default CartScreen;
