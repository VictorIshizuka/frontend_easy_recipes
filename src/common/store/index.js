import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../slices/apiSlice";
import filterSlice from "../slices/filterSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
