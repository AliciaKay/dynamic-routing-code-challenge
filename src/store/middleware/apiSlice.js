import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const routesApi = createApi({
    reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main' }),
  endpoints: (builder) => ({
    getRoutes: builder.query({
      query: () => '/routes.json'
    }),
    getGeneric: builder.query({
        getGenericList: builder.query({
            query: (selection) => `${selection}.json`
        })
    })
  })
})

export const {
  useGetRoutesQuery, useGetGenericQuery
} = routesApi