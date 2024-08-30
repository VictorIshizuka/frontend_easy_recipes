import { apiSlice } from "./apiSlice";

export const recipesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getRecipes: builder.query({
      query: filter => ({ url: "/api/recipes", params: { ...filter } }),
      providesTags: ["Recipe"],
    }),
    getRecipe: builder.query({
      query: id => {
        console.log(id);
        return `/api/recipes/${id}`;
      },
      providesTags: ["Recipe"],
    }),
    addRecipe: builder.mutation({
      query: newRecipe => ({
        url: "/api/recipes",
        method: "POST",
        body: newRecipe,
      }),
      invalidatesTags: ["Recipe"],
    }),
    uploadImage: builder.mutation({
      query: image => ({
        url: "/api/recipes/upload",
        method: "POST",
        body: image,
      }),
    }),
    //   updateRecipe: builder.mutation({
    //     query: updatedRecipe => ({
    //       url: `/${updatedRecipe.id}`,
    //       method: "PUT",
    //       body: updatedRecipe,
    //     }),
    //     invalidatesTags: ["Recipe"],
    //   }),
    //   deleteRecipe: builder.mutation({
    //     query: id => ({
    //       url: `/${id}`,
    //       method: "DELETE",
    //     }),
    //     invalidatesTags: ["Recipe"],
    //   }),
  }),
});

export const {
  useGetRecipesQuery,
  useAddRecipeMutation,
  useUploadImageMutation,
  // useUpdateRecipeMutation,
  // useDeleteRecipeMutation,
  useGetRecipeQuery,
} = recipesApiSlice;
