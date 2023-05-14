import { createSlice } from "@reduxjs/toolkit";
import { IAutoPartsInitialState } from "../../../types/productTypes";
import { fetchGetAllParts, fetchSearch } from "./autoPartsServices";

const initialState: IAutoPartsInitialState = {
  parts: [],
  loading: false,
  errors: "",
  totalPages: 1,
  currentPage: 1,
  totalProducts: 0,
  limit: 8
};

export const autoPartsSlice = createSlice({
  name: "parts",
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllParts.pending, (state) => {
      state.loading = true;
      state.errors = undefined;
    });
    builder.addCase(fetchGetAllParts.fulfilled, (state, action) => {
      const { results, totalPages, totalProducts } = action.payload;
      state.parts = results;
      state.totalPages = totalPages;
      state.totalProducts = totalProducts;
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchGetAllParts.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true;
      state.errors = undefined;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      const { results, totalPages, totalProducts } = action.payload;
      state.parts = results;
      state.totalPages = totalPages;
      state.totalProducts = totalProducts;
      state.loading = false;
      state.errors = action.payload;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  }
});

export const { setCurrentPage } = autoPartsSlice.actions;

export default autoPartsSlice.reducer;
