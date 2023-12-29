import { useDispatch, useSelector } from '@/lib/redux'
import { selectedNews } from '@/lib/redux/slices/newsSlice'
import { resetSelectNews, selectNews } from '@/lib/redux/slices/newsSlice/actions'
import { Articles } from '@/lib/redux/slices/newsSlice/types'

const useSelectNews = () => {
  const dispatch = useDispatch()
  const selectedNewsClicked = useSelector(selectedNews)
  const handleClick = (news: Articles) => {
    dispatch(selectNews(news))
  }
  const resetSlectedNews = () => {
    dispatch(resetSelectNews())
  }
  return { handleClick, selectedNewsClicked, resetSlectedNews }
}

export default useSelectNews
