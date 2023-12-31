import { getQueryStringFromObject } from '@/utils/helpers/helpers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsData } from './types'

const apiKey = process.env.NEXT_PUBLIC_API_KEY || ''

export const NewsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsData, any>({
      query: ({ page = 1, pageSize = 20, q = 'all', category = 'general' }) => {
        const queryStr = getQueryStringFromObject({
          q,
          apiKey,
          page,
          pageSize,
          category,
        })
        return {
          url: `top-headlines?${queryStr}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const selectGetUsers = (state: { newsApi: ReturnType<typeof NewsApi.reducer> }) =>
  state.newsApi.queries.getAllNews?.data

export const { useGetAllNewsQuery } = NewsApi
