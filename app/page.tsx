/* Components */
import { Typography } from '@mui/material'
import { Counter } from './components/Counter/Counter'
import NewsListContainer from './components/NewsListContainer/NewsListContainer'

export default function IndexPage() {
  return (
    <div>
      {/* <Typography variant='h1'>Mui </Typography> */}
      {/* <Counter /> */}
      <NewsListContainer />
    </div>
  )
}

export const metadata = {
  title: 'News App',
}
