/* Components */
import { Container, Typography } from '@mui/material'
import { Counter } from './components/Counter/Counter'
import NewsListContainer from './components/NewsListContainer/NewsListContainer'

export default function IndexPage() {
  return (
    <Container>
      {/* <Typography variant='h1'>Mui </Typography> */}
      {/* <Counter /> */}
      <NewsListContainer />
    </Container>
  )
}

export const metadata = {
  title: 'News App',
}
