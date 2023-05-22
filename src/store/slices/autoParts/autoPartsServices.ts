import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpRequest } from "../../../httpRequests";
import { PATHDOMAIN } from "../../../constants";

export const fetchGetAllParts = createAsyncThunk(
  "parts/fetchOptions",
  async function(_, { getState, rejectWithValue }) {
    try {
      // @ts-ignore
      const { currentPage, limit } = getState().autoParts;
      const res: Response = await httpRequest(
        `${PATHDOMAIN}/getAllParts?page=${currentPage}&limit=${limit}`,
        "GET"
      );
      const data = await res.json();
      window.scrollTo(0, 0);
      return data;
    } catch (e: any) {
      console.log(e.message);
      return rejectWithValue(e);
    }
  }
);

export const fetchGetProducts = createAsyncThunk(
  "parts/fetchGetProducts",
  async function(
    { mark, model, year, article, numberOfProduct, product, page }: any,
    { getState, rejectWithValue }
  ) {
    try {
      // @ts-ignore
      const { limit } = getState().autoParts;
      const res: Response = await httpRequest(
        `${PATHDOMAIN}/getAllParts?page=${page}&limit=${limit}&mark=${mark || ""}&model=${model || ""}&year=${year || ""}&article=${article || ""}&numberOfProduct=${numberOfProduct || ""}&product=${product || ""}`,
        "GET"
      );
      const data = await res.json();
      window.scrollTo(0, 0);
      return data;
    } catch (e: any) {
      console.log(e.message);
      return rejectWithValue(e);
    }
  }
);