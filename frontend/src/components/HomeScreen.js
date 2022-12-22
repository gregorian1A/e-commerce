import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import { getProducts as fetchProducts } from "../redux/actions/productsActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { loading, products, error } = getProducts;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          { error }
        ) : (
          products.map((product) => (
            <Products key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

const Products = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt="product" />
      <div className="product__info">
        <p className="info__name">{product.name}</p>
        <p className="info__description">{product.description}</p>
        <p className="info__price">${product.price}</p>

        <Link to={`/product/${product._id}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
