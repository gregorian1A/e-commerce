import './Sidedrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidedrawer = ({ show, click }) => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalQty = cartItems.reduce((acc, curr) => acc + Number(curr.qty), 0);
    const style = ['sidedrawer'];

    if(show) {
        style.push('show');
    }

    return <div className={style.join(" ")}>
        <ul className="sidedrawer__links">
           <li>
            <Link to="/" onClick={click}>
                Shop
            </Link>
            </li>
           <li>
               <Link to="/cart" onClick={click}>
           <div className="sidedrawer__link">
                       <i className="fas fa-shopping-cart"></i>Cart
               <span className="sidedrawer__badge">{totalQty}</span>
               </div>
               </Link>
           </li>
        </ul>
    </div>
}

export default Sidedrawer;