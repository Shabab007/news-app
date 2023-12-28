'use client'
import { useGetAllNewsQuery } from '@/lib/redux/slices/newsSlice/newsApiQuery'
import { Box, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsListContainer = () => {
  const { data, isError, isLoading } = useGetAllNewsQuery(
    { q: 'bitcoin', page: 1, pageSize: 30 },
    { refetchOnMountOrArgChange: true },
  )
  if (isLoading) {
    return (
      <>
        <Grid container gap={2} justifyContent={'center'} padding={2}>
          {[...Array(20).keys()].map((item) => {
            console.log(item)
            return (
              <Grid key={item}>
                <Stack spacing={1}>
                  <Skeleton variant='rectangular' width={345} height={150} />
                  <Skeleton variant='rectangular' width={345} height={80} />
                </Stack>
              </Grid>
            )
          })}
        </Grid>
      </>
    )
  }
  return (
    <Grid container gap={2} justifyContent={'center'} padding={2}>
      {data?.articles.map((item: any, index: number) => {
        console.log(item)
        return (
          <Grid key={index} xs={12} sm={11.5} md={5.5} lg={5.5} xl={3.5}>
            <NewsCard
              image={item.urlToImage}
              middle={index % 2 !== 0}
              title={item.title}
              date={item.publishedAt}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default NewsListContainer
