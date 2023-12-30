import { newsSlice } from './newsSlice'

export const {
  selectNews,
  setSearchInput,
  setSelectedCategory,
  readLaterNewsAdd,
  resetReadLaterNews,
  resetSelectNews,
  resetState,
  readLaterNewsRemove,
} = newsSlice.actions
