import { NewsCategory } from '@/app/actions/news/types'

const entries = Object.entries(NewsCategory)

export const genrateCategoryTabs = () => {
  const tabs = []
  for (const [key, value] of entries) {
    tabs.push({ key, value })
  }
  return tabs
}
