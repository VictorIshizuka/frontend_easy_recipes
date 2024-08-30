import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../slices/apiSlice";
import filterSlice from "../slices/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
