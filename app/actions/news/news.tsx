import { getQueryStringFromObject } from '@/utils/helpers/helpers'
import { FetchNewsParams } from './types'

export const fetchNews = async (params: FetchNewsParams) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || ''
  const { page = 1, pageSize = 20, q = 'all', category } = params
  const queryStr = getQueryStringFromObject({
    q,
    apiKey,
    page,
    pageSize,
    category,
  })
  const url = process.env.NEXT_PUBLIC_API_URL + `top-headlines?${queryStr}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()

  return data?.articles
}
