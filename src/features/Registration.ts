import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRegister } from '../models/interfaces';

const API_URL = 'http://localhost:4000';

const registerApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        register: builder.mutation<IRegister, IRegister>({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            }),
            transformResponse: (data: any) => {
                localStorage.setItem('token', data.accessToken)
                return data;
            }
        }),
    }),
});

export const { useRegisterMutation } = registerApi;
export default registerApi;