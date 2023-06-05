import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getCounterDefaultValue from './endpoints/get-counter-default-value';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5555/api/' }),
  endpoints: (builder) => ({
    getCounterDefaultValue: getCounterDefaultValue(builder),
  }),
});

export const { useGetCounterDefaultValueQuery } = api;
