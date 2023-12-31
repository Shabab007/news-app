'use client'
import { Grid, Skeleton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchNews } from '@/app/actions/news/news'
import LoadMore from '../LoadMore/LoadMore'
import NewsMapper from '../NewsMapper/NewsMapper'
import { selectSearchInput, selectedCategory } from '@/lib/redux/slices/newsSlice'
import { useSelector } from '@/lib/redux'

const NewsListContainer = () => {
  const [data, setData] = useState([])
  const searchInput = useSelector(selectSearchInput)
  const category = useSelector(selectedCategory)
  const [loading, setLoading] = useState(false)

  const NewsCardSkeleton = () => {
    return (
      <Grid container gap={2} justifyContent={'center'} padding={2}>
        {[...Array(20).keys()].map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={11.5} md={5.5} lg={2.5} xl={2.5}>
              <Stack>
                <Skeleton variant='rectangular' height={218} />
                <Skeleton />
                <Skeleton width='60%' />
              </Stack>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  const handleFetch = async () => {
    setLoading(true)
    const res = await fetchNews({ q: searchInput, category, page: 1, pageSize: 20 })
    setData(res)
    setLoading(false)
  }
  useEffect(() => {
    handleFetch()
  }, [searchInput, category])

  return (
    <Stack alignItems={'center'} spacing={1}>
      <Grid container gap={2} justifyContent={'center'} padding={2}>
        <NewsMapper data={data} />
      </Grid>
      {loading ? <NewsCardSkeleton /> : <LoadMore />}
    </Stack>
  )
}

export default NewsListContainer
