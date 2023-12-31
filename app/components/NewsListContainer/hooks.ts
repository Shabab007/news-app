import { fetchNews } from '@/app/actions/news/news'
import { useSelector } from '@/lib/redux'
import { selectSearchInput, selectedCategory } from '@/lib/redux/slices/newsSlice'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useLoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState(1)
  const [end, setEnd] = useState(false)
  const searchInput = useSelector(selectSearchInput)
  const category = useSelector(selectedCategory)
  const handleFetch = async () => {
    const res = await fetchNews({ q: searchInput, category, page, pageSize: 20 })
    if (res?.length) {
      setEnd(false)
      setData([...data, ...res])
      setPage((page) => page + 1)
    } else {
      setPage(1)
      setEnd(true)
    }
  }
  useEffect(() => {
    setData([])
    setPage(2)
  }, [searchInput, category])
  useEffect(() => {
    if (inView) {
      handleFetch()
    }
  }, [inView, data])

  return { data, end, ref }
}
