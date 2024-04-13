import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

faker.seed(99);

const products = [...Array(21)].map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.url(),
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7, 11, 15, 20]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));

const initialState = {
  product: products,
  cart: [],
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      let data = action.payload;
      state.cart.push({ ...data, qty: 1 });
    },

    REMOVE_FROM_CART: (state, action) => {
      let product_id = action.payload;
      let updatedList = state.cart.filter((item) => item.id !== product_id);
      state.cart = updatedList;
    },
    CHANGE_QUANTITY_OF_CART: (state, action) => {
      let product_id = action.payload.id;
      let updated_qty = action.payload.qty;

      //! METHOD 1 FOR UPDATE QTY OF CART OBJECT
      // let selectedItem = state.cart.filter((item) => item.id === product_id);
      // selectedItem[0].qty = updated_qty;
      // let indexOfSelectedItem = state.cart.findIndex(
      //   (item) => item.id === product_id
      // );
      // let updateList = [...state.cart];
      // updateList[indexOfSelectedItem] = selectedItem[0];
      // state.cart = updateList;
      //! METHOD 2 FOR UPDATE QTY OF CART OBJECT
      state.cart.filter((item) =>
        item.id === product_id ? (item.qty = updated_qty) : item.qty
      );
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_OF_CART } =
  CartSlice.actions;

export default CartSlice.reducer;
