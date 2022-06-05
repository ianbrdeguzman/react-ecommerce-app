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
          url: '/api/user/register',
          method: 'POST',
          body
        };
      }
    }),
    signIn: builder.mutation<User, { email: string; password: string }>({
      query: (body) => {
        return {
          url: '/api/user/signin',
          method: 'POST',
          body
        };
      }
    }),
    update: builder.mutation<
      User,
      {
        userId: string;
        name: string;
        email: string;
        password: string;
        token: string;
      }
    >({
      query: (body) => {
        return {
          url: '/api/user/profile',
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
