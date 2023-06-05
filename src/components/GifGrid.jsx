import PropTypes from 'prop-types'
import Bars from './Bars'
import { useGifs } from '../hooks/useGifs'

export function GifGrid ({ category }) {
  const { isLoading, data, handleMore } = useGifs(category, 10)

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Bars />
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className='p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400' role='alert'>
        <span className='font-medium'>Oh no!</span> No se han econtrado resultados para <em className='font-medium text-red-400 uppercase'>{category}</em>.
      </div>
    )
  }

  return (
    <div className='grid gap-2 mx-auto space-y-2 auto-rows-[minmax(0,200px)] sm:space-y-0 sm:grid sm:grid-cols-2 md:space-y-0 md:grid md:grid-cols-3 lg:space-y-0 lg:grid lg:grid-cols-4'>
      {
        data?.map(function (gif) {
          const { id, title, url } = gif
          return (
            <img
              className='object-cover w-full h-full rounded shadow-2xl'
              key={id}
              src={url}
              alt={title}
            />
          )
        })
      }
      <button onClick={handleMore} className='flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded'>Más</button>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
