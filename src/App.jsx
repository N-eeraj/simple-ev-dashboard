import { useEffect, useState } from 'react'
import { randomData } from './useRandomData'

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => setData(randomData()), [])

  return (
    <>
      <img
        src={`/images/${data?.image}`}
        alt={data?.model} />
    </>
  )
}

export default App