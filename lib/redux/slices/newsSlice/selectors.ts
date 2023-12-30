/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectReadLaterNews = (state: ReduxState) => state.news.readLaterNews
export const selectedNews = (state: ReduxState) => state.news.selectedNews
export const selectSearchInput = (state: ReduxState) => state.news.serachInput
export const selectedCategory = (state: ReduxState) => state.news.slectedCategory
