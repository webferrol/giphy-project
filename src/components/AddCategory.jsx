import PropTypes from 'prop-types'
import { useState } from 'react'

export function AddCategory ({ onAddCategory }) {
  const [search, setSearch] = useState('')

  const handleChange = e => {
    const value = e.target.value
    setSearch(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onAddCategory(search)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} role='search' style={{ display: 'flex', gap: '.5rem' }}>
      <label htmlFor='search'>Categorías</label>
      <input
        type='search'
        id='search'
        placeholder='Matrix'
        required
        value={search}
        onChange={handleChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
