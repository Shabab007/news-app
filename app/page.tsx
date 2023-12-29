/* Components */
import { Typography } from '@mui/material'
import { Counter } from './components/Counter/Counter'
import NewsListContainer from './components/NewsListContainer/NewsListContainer'
import { Suspense } from 'react'

export default function IndexPage() {
  return (
    <>
      {/* <Typography variant='h1'>Mui </Typography> */}
      {/* <Counter /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <NewsListContainer />
      </Suspense>
    </>
  )
}

export const metadata = {
  title: 'News App',
}
