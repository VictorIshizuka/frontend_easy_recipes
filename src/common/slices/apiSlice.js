import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000", //or import.meta.env
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Recipe", "Category"],
  endpoints: () => ({}),
  keepUnusedDataFor: 5,
});
