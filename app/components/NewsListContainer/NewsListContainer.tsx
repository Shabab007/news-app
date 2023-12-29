import { useGetAllNewsQuery } from '@/lib/redux/slices/newsSlice/newsApiQuery'
import { Box, Container, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { fetchNews } from '@/app/actions/news/news'
import LoadMore from '../LoadMore/LoadMore'
import { NewsCategory } from '@/app/actions/news/types'
import NewsMapper from '../NewsMapper/NewsMapper'

const NewsListContainer = async () => {
  const data = await fetchNews({ page: 1, pageSize: 20 })
  // return <h1>hkj</h1>
  // const { data, isError, isLoading } = useGetAllNewsQuery(
  //   { q: 'bitcoin', page: 1, pageSize: 30 },
  //   { refetchOnMountOrArgChange: true },
  // )
  // if (isLoading) {
  //   return (
  //     <>
  //       <Grid container gap={2} justifyContent={'center'} padding={2}>
  //         {[...Array(20).keys()].map((item) => {
  //           console.log(item)
  //           return (
  //             <Grid key={item}>
  //               <Stack spacing={1}>
  //                 <Skeleton variant='rectangular' width={345} height={150} />
  //                 <Skeleton variant='rectangular' width={345} height={80} />
  //               </Stack>
  //             </Grid>
  //           )
  //         })}
  //       </Grid>
  //     </>
  //   )
  // }
  return (
    <Stack alignItems={'center'} spacing={1}>
      <Grid container gap={2} justifyContent={'center'} padding={2}>
        <NewsMapper data={data} />
      </Grid>
      <LoadMore />
    </Stack>
  )
}

export default NewsListContainer
