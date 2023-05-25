import { createSlice } from "@reduxjs/toolkit";
import { IAutoPartsInitialState } from "../../../types/productTypes";
import { fetchGetProducts, fetchGetProduct } from "./autoPartsServices";

const initialState: IAutoPartsInitialState = {
  parts: [],
  product: null,
  loading: true,
  errors: "",
  totalPages: 1,
  currentPage: 1,
  isPrevDisabled: false,
  isNextDisabled: false,
  totalProducts: 0,
  limit: 8
};

export const autoPartsSlice = createSlice({
  name: "parts",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload
    },
    setIsPrevDisabled(state, action) {
      state.isPrevDisabled = action.payload
    },
    setIsNextDisabled(state, action) {
      state.isNextDisabled = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetProducts.pending, (state) => {
      state.loading = true;
      state.errors = undefined;
    });
    builder.addCase(fetchGetProducts.fulfilled, (state, action) => {
      const { results, totalPages, totalProducts } = action.payload;
      state.parts = results;
      state.totalPages = totalPages;
      state.totalProducts = totalProducts;
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchGetProducts.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchGetProduct.pending, (state) => {
      state.loading = true;
      state.errors = undefined;
    });
    builder.addCase(fetchGetProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchGetProduct.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  }
});

export const { setCurrentPage, setLimit, setIsPrevDisabled, setIsNextDisabled } = autoPartsSlice.actions;

export default autoPartsSlice.reducer;
