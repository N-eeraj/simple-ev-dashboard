import { useEffect, useState } from 'react'
import { randomData } from './useRandomData'

import Vehicle from './components/Vehicle'
import Stats from './components/Stats'

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => setData(randomData()), [])

  return (
    data &&
    <main className="flex flex-wrap w-screen h-screen bg-primary">
      <Stats />

      <Vehicle
        model={data.model}
        image={data.image}
        tyrePressures={data.tyrePressures} />
    </main>
  )
}

export default App