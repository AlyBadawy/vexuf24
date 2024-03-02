import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
});

export const appApi = createApi({
  baseQuery: baseQuery,
  endpoints: (_builder) => ({}),
});
