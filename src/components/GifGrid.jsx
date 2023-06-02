import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getgifs'
import { useState, useEffect } from 'react'

export function GifGrid ({ category }) {
  const [data, setData] = useState([])
  useEffect(function () {
    getGifs(category).then(setData)
  }, [])
  return (
    <div className='flex gap-1 flex-wrap'>
      {
        data?.map(function (gif) {
          const { id, title, url } = gif
          return (
            <img className='w-56 h-56 object-cover' key={id} src={url} alt={title} />
          )
        })
      }
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
