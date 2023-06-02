import PropTypes from 'prop-types'
import { GifGrid } from './GifGrid'
export function CategoriesList ({ categoriesAll = [] }) {
  return (
    <>
      {
        categoriesAll?.map(
          ({ id, category }) => (
            <section key={id}>
              <h2>{category}</h2>
              {/* Van todos los gifs de la categoría */}
              <GifGrid category={category} />
            </section>
          ))
      }
    </>
  )
}

CategoriesList.propTypes = {
  categoriesAll: PropTypes.array
}
