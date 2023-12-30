import { NewsCategory } from '@/app/actions/news/types'
import { useDispatch } from '@/lib/redux'
import { setSelectedCategory } from '@/lib/redux/slices/newsSlice/actions'
import { useState } from 'react'

const useCategory = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(NewsCategory.GENERAL)
  const handleChange = (event: React.SyntheticEvent, newValue: NewsCategory) => {
    setValue(newValue)
    dispatch(setSelectedCategory(newValue))
  }
  return { value, handleChange }
}

export default useCategory
