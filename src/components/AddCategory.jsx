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
    if (search.trim().length === 0) return
    onAddCategory(search.trim())
    setSearch('')
  }

  return (
    <form className='flex flex-col items-center gap-3' onSubmit={(e) => handleSubmit(e)} role='search'>
      <label htmlFor='search' className='font-bold text-red-400 uppercase'>Categorías</label>
      <input
        type='search'
        id='search'
        required
        placeholder='Matrix'
        value={search}
        onChange={handleChange}
        className='w-full px-2 py-3 border border-black rounded'
      />
    </form>
  )
}

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
