import { NewsCategory } from '@/app/actions/news/types'
import { Tab } from './types'

const entries = Object.entries(NewsCategory)

export const genrateCategoryTabs: () => Tab[] = () => {
  const tabs = []
  for (const [key, value] of entries) {
    tabs.push({ key, value })
  }
  return tabs
}
