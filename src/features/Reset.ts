import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:4000';

const resetPasswordApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        resetPassword: builder.mutation<void, { userId: string}>({
            query: (userId) => ({
                url: `/reset-password/${userId}`, 
                method: 'PUT',
                body: userId,
            }),
        }),
    }),
});

export const { useResetPasswordMutation } = resetPasswordApi;
export default resetPasswordApi;
