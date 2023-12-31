'use client'
import { fetchNews } from '@/app/actions/news/news'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import NewsMapper from '../NewsMapper/NewsMapper'
import { useSelector } from '@/lib/redux'
import { selectSearchInput, selectedCategory } from '@/lib/redux/slices/newsSlice'
import useLoadMore from './hooks'

const LoadMore = () => {
  const { data, ref, end } = useLoadMore()

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
