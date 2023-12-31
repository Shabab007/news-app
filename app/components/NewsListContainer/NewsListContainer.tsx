'use client'
import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'
import LoadMore from '../LoadMore/LoadMore'
import NewsMapper from '../NewsMapper/NewsMapper'
import { useLoadMore } from './hooks'

const NewsCardSkeleton = () => {
  return (
    <Grid container gap={2} justifyContent={'center'} padding={2}>
      {[...Array(20).keys()].map((item, index) => {
        return (
          <Grid item key={index} xs={12} sm={11.5} md={5.5} lg={2.5} xl={2.5}>
            <Stack>
              <Skeleton variant='rectangular' height={160} />
              <Skeleton />
              <Skeleton width='60%' />
            </Stack>
          </Grid>
        )
      })}
    </Grid>
  )
}

const NewsListContainer = () => {
  const { loading, data } = useLoadMore()

  return (
    <Stack alignItems={'center'} spacing={1} width={'100%'}>
      <Grid container gap={2} justifyContent={'center'} padding={2}>
        <NewsMapper data={data} />
      </Grid>
      {loading ? <NewsCardSkeleton /> : <LoadMore />}
    </Stack>
  )
}

export default NewsListContainer
