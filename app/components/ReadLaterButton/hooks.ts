import { useDispatch, useSelector } from '@/lib/redux'
import { selectReadLaterNews } from '@/lib/redux/slices/newsSlice'
import { readLaterNewsAdd, readLaterNewsRemove } from '@/lib/redux/slices/newsSlice/actions'
import { Articles } from '@/lib/redux/slices/newsSlice/types'
import { useState } from 'react'

const useReadLater = (news: Articles) => {
  const readlaterList = useSelector(selectReadLaterNews)
  const isInReadLaterList = readlaterList.find((item) => item.title === news.title)
  const dispatch = useDispatch()
  const [readLater, setReadLater] = useState(Boolean(isInReadLaterList))
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (readLater && isInReadLaterList) {
      dispatch(readLaterNewsRemove(isInReadLaterList))
      setReadLater(false)
    } else {
      dispatch(readLaterNewsAdd(news))
      setReadLater(true)
    }
  }
  return { handleClick, readLater }
}

export default useReadLater
