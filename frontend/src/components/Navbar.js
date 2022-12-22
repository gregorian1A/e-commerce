import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = ({ click, show }) => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalQty = cartItems.reduce((acc, curr) => acc + Number(curr.qty), 0);
    console.log(totalQty)
    
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/" style={{textDecoration: 'none'}}><h2>
                    Redux Shopping Cart
                </h2>
                </Link>
            </div>
            <ul className="navbar__links">
               <li>
               <Link to="/cart">
                   <div className="nav__link">
                       <i className="fas fa-shopping-cart"></i>
               <span className="cartlogo__badge">{totalQty}</span>
               </div>
                </Link>
               </li>
               <li className="shop">
               <Link to="/">
                Shop 
                </Link>
               </li>

            </ul>
            <div className="hamburger__menu">
                <i onClick={click} className={!show ? 'fa fa-bars' : 'fa fa-arrow-left'}></i>
            </div>
 
        </nav>
    )
}

export default Navbar;