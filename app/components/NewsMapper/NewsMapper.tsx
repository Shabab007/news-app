'use client'
import { Articles } from '@/lib/redux/slices/newsSlice/types'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Porps } from './types'
import useSelectNews from './hooks'
import CustomModal from '../Modal/CustomModal'
import { Close } from '@mui/icons-material'
import NewsDetails from '../NewsDetails/NewsDetails'
import ModalContent from '../ModalContent/ModalContent'

const NewsMapper = (props: Porps) => {
  const { data = [] } = props
  const [open, setOpen] = useState(false)
  const { handleClick, selectedNewsClicked, resetSlectedNews } = useSelectNews()
  const handleCard = (item: Articles) => {
    setOpen(true)
    handleClick(item)
  }
  const handleClose = () => {
    resetSlectedNews()
    setOpen(false)
  }
  return (
    <>
      {data?.map((item: Articles, index: number) => {
        return (
          <Grid
            item
            key={index}
            xs={12}
            sm={11.5}
            md={5.5}
            lg={5.5}
            xl={3.5}
            onClick={() => handleCard(item)}
          >
            <NewsCard index={index} news={item} />
          </Grid>
        )
      })}
      <CustomModal open={Boolean(open && selectedNewsClicked)} handleClose={handleClose}>
        <ModalContent
          slectedNews={selectedNewsClicked}
          title={'News Details'}
          handleClose={handleClose}
        />
      </CustomModal>
    </>
  )
}

export default NewsMapper
