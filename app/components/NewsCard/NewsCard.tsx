import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import MotionCard from '../MotionDiv/MotionDiv'
import { getFormattedDate } from '@/utils/helpers/helpers'
import ReadLaterButton from '../ReadLaterButton/ReadLaterButton'
import { Articles } from '@/lib/redux/slices/newsSlice/types'

export default function NewsCard(props: {
  news: Articles
  middle?: boolean
  index?: number
  onClick?: () => void
}) {
  const { news, middle, index, onClick } = props
  const { urlToImage, title, publishedAt } = news
  const displayImgae =
    urlToImage !== null
      ? urlToImage
      : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnews&psig=AOvVaw0uDrEUozKk90iJ4466TMis&ust=1703910713968000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDm16Hos4MDFQAAAAAdAAAAABAE'
  return (
    <MotionCard index={index} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component='img'
          //   sx={{ height: `calc(100vw / 5 + 140px)`, maxHeight: '150px' }}
          image={displayImgae}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom component='div'>
            {title}
          </Typography>
          <Stack>
            <Typography variant='body2' color='text.secondary'>
              {getFormattedDate(publishedAt)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ReadLaterButton news={news} />
      </CardActions>
    </MotionCard>
  )
}
