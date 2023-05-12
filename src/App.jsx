import { useEffect, useState } from 'react'
import { randomData } from './useRandomData'

import Vehicle from './components/Vehicle'
import Stats from './components/Stats'

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => setData(randomData()), [])

  return (
    data &&
    <main className="flex flex-col-reverse md:flex-row flex-wrap items-center w-screen min-h-screen bg-primary">
      <section className="w-screen md:w-2/5 px-4 pb-5 md:p-6">
        <Stats stats={data.stats} />
      </section>

      <Vehicle
        model={data.model}
        image={data.image}
        tyrePressures={data.tyrePressures} />
    </main>
  )
}

export default App