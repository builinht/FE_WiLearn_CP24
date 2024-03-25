import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (userInfo) => ({
        url: "api/Auth/Login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { usePostLoginMutation } = appApi;
