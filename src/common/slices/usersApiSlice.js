import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: "/api/users/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["User"],
    }),
    register: builder.mutation({
      query: params => ({
        url: "/api/users/register",
        method: "POST",
        body: params,
      }),
      providesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({ url: "/api/users/logout", method: "POST" }),
      providesTags: ["User"],
    }),
    //   getUsers: builder.query({
    //     query: () => "/api/users",
    //     providesTags: ["User"],
    //   }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  // useGetUsersQuery
} = userApiSlice;
