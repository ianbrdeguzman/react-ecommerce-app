import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    signup: builder.mutation<
      User,
      { name: string; email: string; password: string }
    >({
      query: (body) => {
        return {
          url: '/v1/user/create',
          method: 'POST',
          body
        };
      }
    }),
    signIn: builder.mutation<User, { email: string; password: string }>({
      query: (body) => {
        return {
          url: '/v1/user/signin',
          method: 'POST',
          body
        };
      }
    }),
    update: builder.mutation<
      User,
      {
        _id: string;
        name: string;
        email: string;
        password: string;
        token: string;
      }
    >({
      query: (body) => {
        return {
          url: '/v1/user/update',
          headers: {
            Authorization: `Bearer ${body.token}`
          },
          method: 'PUT',
          body
        };
      }
    })
  })
});

export const { useSignupMutation, useSignInMutation, useUpdateMutation } =
  userApi;
