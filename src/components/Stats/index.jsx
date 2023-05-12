import StatsCard from './Card'

const Stats = ({ stats }) => {
    return (
        <div className="flex flex-wrap justify-between gap-y-6">
          <StatsCard
            label="Odo"
            value={stats.odo}
            unit="Km"
            className="w-full" />
          <StatsCard
            label="Top Speed"
            value={stats.speed.best}
            unit="Km/h"
            className="w-[48%]" />
          <StatsCard
            label="Best Efficiency"
            value={stats.efficiency.best}
            unit="W/Km"
            className="w-[48%]" />
          <StatsCard
            label="Average Speed"
            value={stats.speed.average}
            unit="Km/h"
            className="w-[48%]" />
          <StatsCard
            label="Average Efficency"
            value={stats.efficiency.average}
            unit="W/Km"
            className="w-[48%]" />
        </div>
    )
}

export default Stats