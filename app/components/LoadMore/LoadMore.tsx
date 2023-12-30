'use client'
import { fetchNews } from '@/app/actions/news/news'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import NewsMapper from '../NewsMapper/NewsMapper'
import { Articles } from '@/lib/redux/slices/newsSlice/types'
import { useSelector } from '@/lib/redux'
import { selectSearchInput, selectedCategory } from '@/lib/redux/slices/newsSlice'

const LoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState(2)
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
  return (
    <>
      <Grid container gap={2} justifyContent={'center'} padding={2}>
        <NewsMapper data={data} />
      </Grid>
      {!end ? (
        <Box ref={ref} sx={{ display: 'flex' }}>
          <CircularProgress size={58} />
        </Box>
      ) : (
        <Typography>No more data found</Typography>
      )}
    </>
  )
}

export default LoadMore
