import React from 'react'
import { Props } from './types'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { getFormattedDate } from '@/utils/helpers/helpers'

const NewsDetails = (props: Props) => {
  const { news } = props
  const displayImgae = news?.urlToImage || ''
  return (
    <Card>
      <CardActionArea>
        <CardMedia component='img' image={displayImgae} alt='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {news.title}
          </Typography>
          <Typography gutterBottom component='div'>
            {news?.description}
          </Typography>
          <Typography gutterBottom component='div'>
            {news?.content}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {getFormattedDate(news?.publishedAt)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            {news?.author && <Typography>Author: {news?.author}</Typography>}
            {news?.source.name && <Typography>Source: {news?.source.name}</Typography>}
          </Grid>
          <Grid item>
            <Button size='small' color='primary'>
              <Link href={news.url || '#'}>{'News Link'.toLowerCase()}</Link>
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default NewsDetails
