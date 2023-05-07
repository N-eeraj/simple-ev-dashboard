import { useEffect } from 'react'
import { randomData } from './useRandomData'

const App = () => {
  useEffect(randomData, [])

  return (
    <>

    </>
  )
}

export default App