import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function NewsCard(props: {
  image: string
  title: string
  date: string
  middle?: boolean
}) {
  const { image, title, date, middle } = props
  console.log(middle)
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          //   sx={{ height: `calc(100vw / 5 + 140px)`, maxHeight: '150px' }}
          image={image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
