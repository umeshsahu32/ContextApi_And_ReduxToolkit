import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartSlice";
import ProductReducer from "./reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});
