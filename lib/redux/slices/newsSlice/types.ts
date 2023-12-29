import { NewsCategory } from '@/app/actions/news/types'

export type Source = {
  id: string | null
  name: string | null
}
export type Articles = {
  source: Source
  author: string | null
  title: string
  description: string | null
  url: string | null
  urlToImage: string | null
  content: null | string
  publishedAt: string
}
export type NewsData = {
  status: 'ok' | 'error'
  totalResult: number
  articles: Articles[]
}
export type NewsSLiceState = {
  selectedNews: Articles
  readLaterNews: Articles[]
  serachInput: string
  slectedCategory: NewsCategory
}
