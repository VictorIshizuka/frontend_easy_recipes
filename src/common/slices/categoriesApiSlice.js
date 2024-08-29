import { apiSlice } from "./apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => "/api/categories/",
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
