import { useSelector } from '@/lib/redux'
import { selectReadLaterNews } from '@/lib/redux/slices/newsSlice'
import React from 'react'

export const useReadLater = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const readLaterNews = useSelector(selectReadLaterNews)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const headingText = readLaterNews.length
    ? 'Here are your read later news'
    : 'No news to read later'

  return { handleButtonClick, handlePopClose, headingText, id, readLaterNews, open, anchorEl }
}
