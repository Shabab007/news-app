/* Core */
import { NewsCategory } from '@/app/actions/news/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Articles, NewsSLiceState } from './types'

const initialState: NewsSLiceState = {
  selectedNews: {} as Articles,
  readLaterNews: [],
  serachInput: '',
  slectedCategory: NewsCategory.GENERAL,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.serachInput = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<NewsCategory>) => {
      state.serachInput = action.payload
    },
    selectNews: (state, action: PayloadAction<Articles>) => {
      state.selectedNews = action.payload
    },
    readLaterNewsAdd: (state, action: PayloadAction<Articles>) => {
      state.readLaterNews = [...state.readLaterNews, action.payload]
    },
    readLaterNewsRemove: (state, action: PayloadAction<Articles>) => {
      state.readLaterNews = state.readLaterNews.filter(
        (news) => news.title !== action.payload.title,
      )
    },
    resetSelectNews: (state) => {
      state.selectedNews = {} as Articles
    },
    resetReadLaterNews: (state) => {
      state.readLaterNews = []
    },
    resetState: (state) => {
      state = initialState
    },
  },
})
