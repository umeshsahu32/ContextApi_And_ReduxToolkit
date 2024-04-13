import { Button, Form } from "react-bootstrap";
import Rating from "./Rating.jsx";
import styles from "./styles.module.css";
import {
  FILTER_BY_PRICE,
  FILTER_BY_STOCK,
  FILTER_BY_DELIVERY,
  FILTER_BY_RATING,
  CLEAR_FILTERS,
} from "../reducers/ProductSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product);

  return (
    <div className={styles.filters}>
      <span className={styles.title}>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => dispatch(FILTER_BY_PRICE("lowToHigh"))}
          checked={filters.byPrice === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => dispatch(FILTER_BY_PRICE("highToLow"))}
          checked={filters.byPrice === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => dispatch(FILTER_BY_STOCK())}
          checked={filters.byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => dispatch(FILTER_BY_DELIVERY())}
          checked={filters.byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={filters.byRating}
          onClick={(i) => dispatch(FILTER_BY_RATING(i + 1))}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light" onClick={() => dispatch(CLEAR_FILTERS())}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
