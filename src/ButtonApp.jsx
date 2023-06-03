import { useState } from 'react'
import Button from './components/Button'

export function ButtonApp () {
  const [count, setCount] = useState(0)
  return (
    <main className='p-3.5'>
      <h1 className='text-4xl font-bold text-center'>Botones</h1>
      <fieldset className='flex gap-1'>
        <Button onMyClick={() => setCount(count + 1)}>
          Botón {count}
        </Button>
        <Button onMyClick={() => setCount(count + 1)}>
          Botón {count}
        </Button>
      </fieldset>

    </main>
  )
}
