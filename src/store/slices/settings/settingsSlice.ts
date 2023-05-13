import { createSlice } from "@reduxjs/toolkit";
import { IOptionsInitialState } from "../../../types/productTypes";
import { fetchOptions } from "./settingsServices";

const initialState: IOptionsInitialState = {
  autos: null,
  options: null,
  status: "",
  errors: null,
  partsCategory: null
};

export const settingsSlice = createSlice({
  name: "options",
  initialState: initialState,
  reducers: {
    setModels(state, action) {
      state.autos = action.payload;
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
    setPartsCategory(state, action) {
      state.partsCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOptions.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchOptions.fulfilled, (state) => {
      state.status = "fulfilled";
    });
    builder.addCase(fetchOptions.rejected, (state, action) => {
      state.status = "rejected";
      state.errors = action.payload;
    });
  }
});

export const { setModels, setOptions, setPartsCategory } = settingsSlice.actions;

export default settingsSlice.reducer;
