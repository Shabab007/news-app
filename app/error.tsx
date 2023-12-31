'use client'
import { Button, Container, Typography } from '@mui/material'

const Error = () => {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant='h1' gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant='h4' gutterBottom>
        We couldn't load the requested data.
      </Typography>
      <Typography>Please try again</Typography>
    </Container>
  )
}

export default Error
