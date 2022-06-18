import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Order } from '../types';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userSlice.user?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => {
        return {
          url: '/api/order/mine',
          method: 'GET'
        };
      }
    }),
    getOrderById: builder.query<Order, string>({
      query: (id) => {
        return {
          url: `/api/order/${id}`,
          method: 'GET'
        };
      }
    })
  })
});

export const { useGetOrdersQuery, useGetOrderByIdQuery } = orderApi;
