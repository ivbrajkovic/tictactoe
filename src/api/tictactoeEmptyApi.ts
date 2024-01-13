import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';

const tictactoeBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    token && headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const tictactoeEmptyApi = createApi({
  baseQuery: tictactoeBaseQuery,
  endpoints: () => ({}),
});
