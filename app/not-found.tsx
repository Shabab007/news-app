import React from 'react'
import { Container, Typography } from '@mui/material'
import Link from 'next/link'

const NotFoundPage = () => {
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
        404 - Page Not Found
      </Typography>
      <Typography variant='h4' gutterBottom>
        Sorry, the page you're looking for doesn't exist.
      </Typography>
      <Link href='/'>
        <Typography variant='h4' gutterBottom sx={{ textDecoration: 'underline' }}>
          Return to Home
        </Typography>
      </Link>
    </Container>
  )
}

export default NotFoundPage
