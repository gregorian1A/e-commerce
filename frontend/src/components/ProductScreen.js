import React, {useState, useEffect} from 'react';
import './ProductScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { getProductDetails as getDetails } from '../redux/actions/productsActions';

const ProductScreen = ({ match, history}) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const details = useSelector(state => state.getDetails);
    const { product, loading, error } = details;

    useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getDetails(match.params.id));
        }
    }, [dispatch, match, product])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push('/cart')
    }
    
    return (
        <div className="productscreen">
          {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
              <>
       <div className="left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
              </>
          )}
        </div>
    )
}

export default ProductScreen;
