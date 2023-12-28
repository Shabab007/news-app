/* Instruments */
import { counterSlice } from './slices'
import { NewsApi } from './slices/newsSlice/newsApiQuery'

export const reducer = {
  counter: counterSlice.reducer,
  [NewsApi.reducerPath]: NewsApi.reducer,
}
