import { Articles } from '@/lib/redux/slices/newsSlice/types'

export type NewsCardProps = {
  news: Articles
  index?: number
  onClick?: () => void
}
