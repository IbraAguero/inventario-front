import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inventario-ministerio-api.onrender.com/api',
    credentials: 'include',
  }),
  tagTypes: ['Printers', 'Options'],
  endpoints: (builder) => ({}),
});
