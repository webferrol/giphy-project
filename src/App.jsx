import { useState } from 'react'
import './App.css'
import data from './mocks/luke-skywalker.json'

function App () {
  const [luke, setLuke] = useState(data)
  const [value, setValue] = useState('https://www.google.es')
  const { films } = luke

  const addFilm = (evento) => {
    evento.preventDefault()
    if (value.trim().length === 0) return
    const copy = structuredClone(luke)
    copy.films.push(value)
    setLuke(copy)
  }

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  return (
    <>
      <h1>Cualquier cosa</h1>
      {luke.name}

      <form
        onSubmit={(e) => addFilm(e)}
        id='alta'
      >
        <label>
          Dirección URL
          <input
            type='url'
            placeholder='https://www.google.es'
            onChange={handleChange}
            value={value}
          />
        </label>
        {value}
      </form>
      <button
        form='alta'
        style={{ display: 'block' }}
      >
        Añadir Enlace
      </button>

      <ul>
        {
          films.map(
            (link, i) => (
              <li key={i}>
                <a href={link}>Enlace {i + 1}</a>
              </li>
            )
          )
        }
      </ul>
    </>
  )
}

export default App
