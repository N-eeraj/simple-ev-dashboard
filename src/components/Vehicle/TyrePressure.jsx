const TyrePressure = ({ percentage }) => {
    const doughnutStyle = {
        strokeDashoffset: `${220 - percentage * 2}%`,
        strokeDasharray: '220%'
    }

    const status = (() => {
        let stroke, shadow
        if (percentage < 60) {
            stroke = 'stroke-value-low',
            shadow = `drop-shadow-[0_0_7px_#F55]`
        }
        else if (percentage < 80) {
            stroke = 'stroke-value-med',
            shadow = `drop-shadow-[0_0_7px_#FF7]`
        }
        else {
            stroke = 'stroke-value-high',
            shadow = `drop-shadow-[0_0_7px_#3FA]`
        }

        return { stroke, shadow }
    })()

    return (
        <div className="relative w-[150px]">
            <div className="absolute top-1/2 left-1/2 flex justify-center items-center gap-x-1 -translate-x-1/2 -translate-y-1/2">
                <strong className="text-font-white text-2xl">
                    {percentage}
                </strong>
                <span className="text-font-dark text-md">
                    %
                </span>
            </div>

            <svg className="w-full -rotate-90">
                <circle
                    r="32%"
                    cy="50%"
                    cx="50%"
                    fill="none"
                    className={`absolute top-0 left-0 stroke-[7px] ${status.stroke} ${status.shadow}`}
                    style={doughnutStyle} />
            </svg>
        </div>
    )
}

export default TyrePressure