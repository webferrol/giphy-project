import { useState } from 'react'
import Button from './components/Button'

export function ButtonApp () {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'grid', gap: '.5em' }}>
      <h1>Botones</h1>
      <Button onMyClick={() => setCount(count + 1)}>
        Botón {count}
      </Button>

      <Button onMyClick={() => setCount(count + 1)}>
        Botón {count}
      </Button>

    </div>
  )
}
