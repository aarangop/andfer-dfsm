import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/auth",
  }),
  tagTypes: ["accessToken"],
  endpoints: (build) => ({
    accessToken: build.query<{}, { token: string }>({
      query: () => ({ url: "/accessTokens/" }),
      providesTags: ["accessToken"],
    }),
  }),
});

export { api as authApi };

export const { useAccessTokenQuery } = api;
