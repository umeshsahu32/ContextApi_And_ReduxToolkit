import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import Rating from "./Rating.jsx";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_FROM_CART,
  CHANGE_QUANTITY_OF_CART,
} from "../reducers/CartSlice.jsx";

const ShopCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  // ! REMOVE PRODUCT FROM CART
  const removeProductFromCart = (id) => {
    dispatch(REMOVE_FROM_CART(id));
  };

  // ! CHANGE PRODUCT QUANTITY IN CART
  const changeProductQuantityInCart = (id, qty) => {
    dispatch(CHANGE_QUANTITY_OF_CART({ id, qty }));
  };

  return (
    <div className={styles.cart_screen}>
      <div className={styles.cart_product_container}>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      changeProductQuantityInCart(prod.id, e.target.value)
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeProductFromCart(prod.id)}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className={`${styles.cart_checkout} ${styles.summary}`}>
        <span className={styles.title}>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShopCart;
