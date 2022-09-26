import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazapCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseurl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','8c866e57e8msh2f396bc5fa3ced4p1f2807jsnab7457a3f717')

            return headers;
        },
  }),
  endpoints: (builder) => ({
    getTopChars: builder.query({ query: () => '/charts/world'}),
  }),
});

export const{
    useGetTopChartsQuery,
} = shazapCoreApi;