import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getgifs'

export const useGifs = (category, limit = 10) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [nextPage, setNextPage] = useState(0)

  const handleMore = () => {
    setNextPage(nextPage + 1)
  }

  useEffect(function () {
    const fetchData = async () => {
      const newData = await getGifs(category, nextPage, limit)
      setData([...data, ...newData])
      setIsLoading(false)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage])
  return {
    data,
    handleMore,
    isLoading
  }
}
