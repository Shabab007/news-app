/* Components */
import { Stack } from '@mui/system'
import NewsListContainer from './components/NewsListContainer/NewsListContainer'
import { Suspense } from 'react'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import ReadLater from './components/ReadLater/ReadLater'
import { genrateCategoryTabs } from './components/CategoryTabs/tabs'

export default function IndexPage() {
  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'} padding={'1rem'}>
        <CategoryTabs tabs={genrateCategoryTabs()} />
        <ReadLater />
      </Stack>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NewsListContainer />
      </Suspense>
    </>
  )
}

export const metadata = {
  title: 'News App',
}
