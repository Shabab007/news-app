'use client'
import { fetchNews } from '@/app/actions/news/news'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import NewsMapper from '../NewsMapper/NewsMapper'

const LoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState(2)
  const [end, setEnd] = useState(false)
  useEffect(() => {
    if (inView) {
      fetchNews({ page, pageSize: 20 })
        .then((res) => {
          console.log(res)
          if (res?.length) {
            setEnd(false)
            setData([...data, ...res])
            setPage((page) => page + 1)
          } else {
            setPage(1)
            setEnd(true)
          }
        })
        .catch((err: Error) => {
          console.error(err)
        })
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
