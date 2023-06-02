import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getgifs'
import { useState, useEffect } from 'react'

export function GifGrid ({ category }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setData(await getGifs(category))
  }

  useEffect(function () {
    fetchData()
    setIsLoading(false)
  }, [isLoading])

  if (isLoading) return (<>Cargando</>)

  return (
    <div className='container mx-auto space-y-2 md:space-y-0 md:gap-2 md:grid md:grid-cols-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3'>
      {
        data?.map(function (gif) {
          const { id, title, url } = gif
          return (
            <img className='object-cover w-full h-32 rounded shadow-2xl' key={id} src={url} alt={title} />
          )
        })
      }
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
