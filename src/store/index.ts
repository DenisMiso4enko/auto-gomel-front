import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import settingsSlice from "./slices/settings/settingsSlice";
import autoPartsSlice from "./slices/autoParts/autoPartsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    autoParts: autoPartsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<any, any, any>;
