/* Instruments */
import { counterSlice } from './slices'
import { NewsApi } from './slices/newsSlice/newsApiQuery'
import { newsSlice } from './slices/newsSlice/newsSlice'

export const reducer = {
  counter: counterSlice.reducer,
  news: newsSlice.reducer,
  [NewsApi.reducerPath]: NewsApi.reducer,
}
