import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
  byPrice: "",
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    FILTER_BY_PRICE: (state, action) => {
      state.byPrice = action.payload;
    },

    FILTER_BY_STOCK: (state, action) => {
      state.byStock = !state.byStock;
    },

    FILTER_BY_DELIVERY: (state, action) => {
      state.byFastDelivery = !state.byFastDelivery;
    },

    FILTER_BY_RATING: (state, action) => {
      state.byRating = action.payload;
    },

    FILTER_BY_SEARCH: (state, action) => {
      state.searchQuery = action.payload;
    },

    CLEAR_FILTERS: (state, action) => {
      state.byStock = false;
      state.byFastDelivery = false;
      state.byRating = 0;
      state.searchQuery = "";
      state.byPrice = "";
    },
  },
});

export const {
  FILTER_BY_PRICE,
  FILTER_BY_STOCK,
  FILTER_BY_DELIVERY,
  FILTER_BY_RATING,
  FILTER_BY_SEARCH,
  CLEAR_FILTERS,
} = ProductSlice.actions;

export default ProductSlice.reducer;
