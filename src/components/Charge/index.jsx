import ThunderIcon from './ThunderIcon'
import Range from './Range'
import Battery from './Battery'
import Alert from './Alert'

const Charge = ({ details }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between text-font-dark text-xl">
                <span>
                    Range
                </span>
                <ThunderIcon isCharging={details.isCharging} />
                <span>
                    Charge
                </span>
            </div>

            <div className="flex justify-between px-4">
                <Range range={details.range} />
                <Battery
                    charge={details.percentage}
                    isCharging={details.isCharging} />
            </div>

            <Alert details={details} />
        </div>
    )
}

export default Charge