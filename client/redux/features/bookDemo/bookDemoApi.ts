import { apiSlice } from "../api/apiSlice";

export const bookDemoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bookDemo: builder.mutation({
      query: (data) => ({
        url: "bookDemo",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useBookDemoMutation,
} = bookDemoApi;
