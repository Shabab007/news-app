'use client'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import useDebounce from './useDebounce'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchInput } from '@/lib/redux/slices/newsSlice/actions'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const [debounceVlaue] = useDebounce(value, 500)
  useEffect(() => {
    dispatch(setSearchInput(debounceVlaue))
  }, [debounceVlaue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Search…'
        value={value}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchInput
