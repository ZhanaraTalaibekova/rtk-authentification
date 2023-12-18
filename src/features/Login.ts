import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILogin, IRegister } from '../models/interfaces';

const API_URL = 'http://localhost:4000';

const loginApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<ILogin, ILogin>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData,
            }),
            transformResponse: (data: any) => {
                localStorage.setItem('token', data.accessToken);
                return data;
            }
        }),
    }),
});

export const { useLoginMutation } = loginApi;
export default loginApi;