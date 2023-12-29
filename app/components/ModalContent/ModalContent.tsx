'use client'
import React from 'react'
import NewsDetails from '../NewsDetails/NewsDetails'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Articles } from '@/lib/redux/slices/newsSlice/types'
import { Close } from '@mui/icons-material'

const ModalContent = (props: { slectedNews: Articles; title: string; handleClose: () => void }) => {
  const { slectedNews, title, handleClose } = props
  return (
    <Box
      sx={{
        maxWidth: '80%',
        borderRadius: 'md',
        padding: '2rem',
        boxShadow: 'lg',
        background: '#121212',
      }}
    >
      <Stack spacing={1}>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <Typography variant='h6'>{title}</Typography>
          </Grid>
          <Grid item onClick={handleClose} sx={{ cursor: 'pointer' }}>
            <Close />
          </Grid>
        </Grid>

        <NewsDetails news={slectedNews} />
      </Stack>
    </Box>
  )
}

export default ModalContent
