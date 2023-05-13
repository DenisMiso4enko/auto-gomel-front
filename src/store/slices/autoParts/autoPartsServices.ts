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

export const fetchSearch = createAsyncThunk(
  "parts/fetchSearch",
  async function(
    { mark, model, year, article, numberOfProduct, product }: any,
    { getState, rejectWithValue }
  ) {
    try {
      // @ts-ignore
      const { currentPage, limit } = getState().autoParts;
      console.log("currentPage from seatch ---",currentPage);
      const res: Response = await httpRequest(
        `${PATHDOMAIN}/search?page=${currentPage}&limit=${limit}&mark=${mark}&model=${model}&year=${year}&article=${article}&numberOfProduct=${numberOfProduct}&product=${product}`,
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