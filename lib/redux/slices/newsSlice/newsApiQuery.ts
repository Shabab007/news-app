import { getQueryStringFromObject } from '@/utils/helpers/helpers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.NEXT_PUBLIC_API_KEY || ''

export const NewsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<any, any>({
      query: ({ page = 1, pageSize = 20, q = 'bitcoin' }) => {
        const queryStr = getQueryStringFromObject({
          q,
          apiKey,
          page,
          pageSize,
        })
        return {
          url: `everything?${queryStr}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const selectGetUsers = (state: { newsApi: ReturnType<typeof NewsApi.reducer> }) =>
  state.newsApi.queries.getAllNews?.data

export const { useGetAllNewsQuery } = NewsApi
