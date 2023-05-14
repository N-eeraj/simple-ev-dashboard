import ThunderIcon from './ThunderIcon'
import Range from './Range'
import Battery from './Battery'

const Charge = ({ details }) => {
    return (
        <div>
            <div className="flex justify-between text-font-dark text-xl">
                <span>
                    Range
                </span>
                <ThunderIcon />
                <span>
                    Charge
                </span>
            </div>

            <div className="flex justify-between">
                <Range range={details.range} />
                <Battery charge={details.percentage} />
            </div>
        </div>
    )
}

export default Charge