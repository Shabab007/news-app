'use client'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import NewsMapper from '../NewsMapper/NewsMapper'
import useLoadMore from './hooks'

const LoadMore = () => {
  const { data, end, ref } = useLoadMore()

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
