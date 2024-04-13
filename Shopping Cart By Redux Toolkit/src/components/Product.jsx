import { Card, Button } from "react-bootstrap";
import Rating from "./Rating.jsx";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/CartSlice.jsx";

const Product = ({ prod }) => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  // ! ADD PRODUCT INTO THE CART
  const addProductIntoTheCart = (prod) => {
    dispatch(ADD_TO_CART(prod));
  };

  // ! REMOVE PRODUCT FROM CART
  const removeProductFromCart = (id) => {
    dispatch(REMOVE_FROM_CART(id));
  };

  // ! JSX START FROM HERE
  return (
    <div className={styles.products}>
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod?.price?.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => removeProductFromCart(prod.id)}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => addProductIntoTheCart(prod)}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
