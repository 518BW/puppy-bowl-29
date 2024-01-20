import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2310-UNF-HY-WEB-PT/"
  }),
  endpoints:  (builder) => ({
    fetchPlayers: builder.query({ 
      query: () => `players`,

    }),
  }),
});

export const { useFetchPlayersQuery } = puppyBowlApi;