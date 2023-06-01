import React, { useState } from 'react'
import { CategoriesList, AddCategory } from './components'
import PropTypes from 'prop-types'
import './App.css'

function GiphyApp ({ title = 'Título de ejemplo' }) {
  const [categories, setCategories] = useState([])

  const handleAddCategory = (category) => {
    setCategories([...categories, { id: Date.now(), category }])

    fetch('https://api.giphy.com/v1/gifs/search?api_key=qK8MBkCh3Z5PgUM0eH7CWxWeirEIkWnO&q=matrix&limit=1')
    .then(resp=>resp.json())
    .then(console.log)
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
