'use client'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import useCategory from './hooks'
import { Props } from './types'

export default function CategoryTabs(props: Props) {
  const { tabs } = props
  const { handleChange, value } = useCategory()

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where each tab needs to be selected manually'
      >
        {tabs.map((item) => {
          return <Tab key={item.key} value={item.value} label={item.key} />
        })}
      </Tabs>
    </Box>
  )
}
