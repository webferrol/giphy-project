import React, { useState } from 'react'
import { CategoriesList, AddCategory } from './components'
import PropTypes from 'prop-types'
import './App.css'
import categoryData from './mocks/giphy-results.json'
import categoryItem from './mocks/giphy-item.json'

function GiphyApp ({ title = 'Título de ejemplo' }) {
  const { data } = categoryData
  const [categories, setCategories] = useState(data)

  const handleAddCategory = (category) => {
    const categoryLowerCase = category.toLocaleLowerCase()
    // for (const cat of categories) {
    //   if (cat.category.toLocaleLowerCase() === categoryLowerCase) return
    // }
    if (categories.some(cat => cat.title.toLocaleLowerCase() === categoryLowerCase)) return
    setCategories([...categories, categoryItem])
  }

  return (
    <>
      <h1>{title}</h1>
      <AddCategory onAddCategory={handleAddCategory} />
      <CategoriesList categoriesAll={categories} />
    </>
  )
}

GiphyApp.propTypes = {
  title: PropTypes.string
}

export default GiphyApp
