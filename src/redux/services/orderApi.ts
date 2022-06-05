import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order, User } from '../types';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], User>({
      query: (user: User) => {
        return {
          url: '/api/order/mine',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
      }
    })
  })
});

export const { useGetOrdersQuery } = orderApi;
