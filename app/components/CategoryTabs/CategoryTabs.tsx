'use client'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { NewsCategory } from '@/app/actions/news/types'
import useCategory from './hooks'
import { genrateCategoryTabs } from './tabs'

export default function CategoryTabs() {
  const { handleChange, value } = useCategory()

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where each tab needs to be selected manually'
      >
        {genrateCategoryTabs().map((item) => {
          return <Tab key={item.key} value={item.value} label={item.key} />
        })}
      </Tabs>
    </Box>
  )
}
