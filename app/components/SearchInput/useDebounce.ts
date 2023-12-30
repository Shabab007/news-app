import { useEffect, useState } from 'react'

const useDebounce = (value = '', delay = 500) => {
  const [debounceVlaue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [value, delay])

  return [debounceVlaue]
}
export default useDebounce
