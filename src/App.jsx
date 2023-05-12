import { useEffect, useState } from 'react'
import { randomData } from './useRandomData'

import Vehicle from './components/Vehicle'
import StatsCard from './components/StatsCard'

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => setData(randomData()), [])

  return (
    data &&
    <main className="flex flex-wrap items-center w-screen min-h-screen bg-primary">
      <section className="w-screen md:w-2/5 p-5">
        <div>
          <StatsCard
            label="Odo"
            value={data.stats.odo}
            unit="Km" />
          <StatsCard
            label="Top Speed"
            value={data.stats.speed.best}
            unit="Km/h" />
          <StatsCard
            label="Best Efficiency"
            value={data.stats.efficiency.best}
            unit="W/Km" />
          <StatsCard
            label="Average Speed"
            value={data.stats.speed.average}
            unit="Km/h" />
          <StatsCard
            label="Average Efficency"
            value={data.stats.efficiency.average}
            unit="W/Km" />
        </div>
      </section>

      <Vehicle
        model={data.model}
        image={data.image}
        tyrePressures={data.tyrePressures} />
    </main>
  )
}

export default App