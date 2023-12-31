/* Components */
import { Stack } from '@mui/system'
import NewsListContainer from './components/NewsListContainer/NewsListContainer'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import ReadLater from './components/ReadLater/ReadLater'
import { genrateCategoryTabs } from './components/CategoryTabs/tabs'

export default function IndexPage() {
  return (
    <>
      <Stack direction={'row'}>
        <Stack justifyContent={'flex-start'} alignItems={'center'} padding={'1rem'}>
          <CategoryTabs tabs={genrateCategoryTabs()} />
          <ReadLater />
        </Stack>
        <NewsListContainer />
      </Stack>
    </>
  )
}

export const metadata = {
  title: 'InsideNews',
  descriptip: 'News fetching app',
}
