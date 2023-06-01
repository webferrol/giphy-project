import PropTypes from 'prop-types'
export function CategoriesList ({ categoriesAll = [] }) {
  return (
    <>
      {
        categoriesAll?.map(item => <li key={item.id}>{item.category}</li>)
      }
    </>
  )
}

CategoriesList.propTypes = {
  categoriesAll: PropTypes.array
}
