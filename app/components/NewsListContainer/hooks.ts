import { fetchNews } from '@/app/actions/news/news'
import { useSelector } from '@/lib/redux'
import { selectSearchInput, selectedCategory } from '@/lib/redux/slices/newsSlice'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useLoadMore = () => {
  const [data, setData] = useState([])
  const searchInput = useSelector(selectSearchInput)
  const category = useSelector(selectedCategory)
  const [loading, setLoading] = useState(false)

  const handleFetch = async () => {
    setLoading(true)
    const res = await fetchNews({ q: searchInput, category, page: 1, pageSize: 20 })
    setData(res)
    setLoading(false)
  }
  useEffect(() => {
    handleFetch()
  }, [searchInput, category])
  return { loading, data }
}
