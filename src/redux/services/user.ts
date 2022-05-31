import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    signIn: builder.mutation<User, { email: string; password: string }>({
      query: (body) => {
        return {
          url: '/api/user/signin',
          method: 'POST',
          body
        };
      }
    })
  })
});

export const { useSignInMutation } = userApi;
