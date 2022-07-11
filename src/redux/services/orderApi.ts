import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Order, OrderResponse, OrderArg, PaymentResult } from '../types';

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
  tagTypes: ['OrderId'],
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
      },
      providesTags: ['OrderId']
    }),
    createOrder: builder.mutation<OrderResponse, OrderArg>({
      query: (body) => {
        return {
          url: '/api/order',
          method: 'POST',
          body
        };
      }
    }),
    payOrderById: builder.mutation<
      Order,
      { id: string; paymentResult: PaymentResult }
    >({
      query: ({ id, paymentResult }) => {
        return {
          url: `/api/order/${id}/pay`,
          method: 'PUT',
          body: paymentResult
        };
      },
      invalidatesTags: ['OrderId']
    })
  })
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  usePayOrderByIdMutation
} = orderApi;
