'use client'
import { Button, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Error = () => {
  const handleReturnHome = () => {
    const router = useRouter()

    router.push('/') // Navigate to the home page
  }
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
      <Button variant='contained' color='primary' onClick={handleReturnHome}>
        Return to Home
      </Button>
    </Container>
  )
}

export default Error
