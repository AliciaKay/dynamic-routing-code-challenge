import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const routesApi = createApi({
  reducerPath: 'routesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/Bounteous-Inc/headless-cms-assessment/main/' }),
  endpoints: (builder) => ({
    getRoutes: builder.query({
      query: () => '/routes.json'
    })
  })
})

export const {
  useGetRoutesQuery,
} = routesApi