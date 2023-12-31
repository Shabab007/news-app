'use client'
import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Badge, Divider, Stack } from '@mui/material'
import { useSelector } from '@/lib/redux'
import { selectReadLaterNews } from '@/lib/redux/slices/newsSlice'
import NewsMapper from '../NewsMapper/NewsMapper'
import { useReadLater } from './hooks'

export default function ReadLater() {
  const { readLaterNews, handleButtonClick, handlePopClose, headingText, id, open, anchorEl } =
    useReadLater()
  return (
    <div>
      <Badge badgeContent={readLaterNews.length} color='primary'>
        <Button onClick={handleButtonClick} variant='outlined' style={{ width: '10rem' }}>
          Read Later
        </Button>
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack spacing={2} padding={2}>
          <Typography variant='h6' sx={{ p: 2 }}>
            {headingText}
          </Typography>
          <Divider></Divider>
          <>
            <NewsMapper data={readLaterNews} />
          </>
        </Stack>
      </Popover>
    </div>
  )
}
