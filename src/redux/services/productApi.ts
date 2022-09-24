import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/v1/product`
    }),
    getProductById: builder.query<Product, string>({
      query: (id: string) => `/v1/product/${id}`
    })
  })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
