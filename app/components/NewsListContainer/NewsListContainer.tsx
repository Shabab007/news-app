'use client'
import { useGetAllNewsQuery } from '@/lib/redux/slices/newsSlice/newsApiQuery'
import { Box, Grid } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsListContainer = () => {
  const { data, isError, isLoading } = useGetAllNewsQuery(
    { q: 'bitcoin', page: 1, pageSize: 30 },
    { refetchOnMountOrArgChange: true },
  )
  console.log(data)
  return (
    <Box>
      <Grid container spacing={4}>
        {data?.articles.map((item: any) => {
          return (
            <Grid key={item.id}>
              <NewsCard image={item.urlToImage} title={item.title} date={item.publishedAt} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default NewsListContainer
