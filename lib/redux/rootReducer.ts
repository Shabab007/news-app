/* Instruments */
import { NewsApi } from './slices/newsSlice/newsApiQuery'
import { newsSlice } from './slices/newsSlice/newsSlice'

export const reducer = {
  news: newsSlice.reducer,
  [NewsApi.reducerPath]: NewsApi.reducer,
}
