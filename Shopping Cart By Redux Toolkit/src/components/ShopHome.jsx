import React, { Fragment } from "react";
import Filter from "./Filter.jsx";
import styles from "./styles.module.css";
import Product from "./Product.jsx";
import { useSelector } from "react-redux";

const ShopHome = () => {
  const products = useSelector((state) => state.cart.product);
  const filters = useSelector((state) => state.product);

  const transformProducts = () => {
    let sortedProducts = products;

    if (filters.byPrice !== "") {
      let cpy = [...sortedProducts];
      cpy.length > 0 &&
        cpy.sort((a, b) =>
          filters.byPrice === "lowToHigh"
            ? a.price - b.price
            : b.price - a.price
        );

      sortedProducts = cpy;
    }

    if (!filters.byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (filters.byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (filters.byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= filters.byRating
      );
    }

    if (filters.searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(filters.searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <Fragment>
      <div className={styles.home}>
        <Filter />
        <div className={styles.product_container}>
          {products?.length > 0 &&
            transformProducts().map((prod) => (
              <Product prod={prod} key={prod.id} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ShopHome;
