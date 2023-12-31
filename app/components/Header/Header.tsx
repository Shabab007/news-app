'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SearchInput from '../SearchInput/SearchInput'

export default function DrawerAppBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' position='relative'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            InsideNews
          </Typography>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
