'use client'
import { Button } from '@mui/material'
import React from 'react'
import { Props } from './types'
import useReadLater from './hooks'

const ReadLaterButton = (props: Props) => {
  const { news } = props
  const { handleClick, readLater } = useReadLater(news)

  return (
    <Button
      variant={readLater ? 'contained' : 'outlined'}
      color={readLater ? 'error' : 'primary'}
      onClick={handleClick}
    >
      {readLater ? 'Remove from Read Later' : 'Read Later'}
    </Button>
  )
}

export default ReadLaterButton
