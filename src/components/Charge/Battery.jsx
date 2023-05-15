const Battery = ({ charge, isCharging }) => {
    const animateCharging = isCharging && charge !== 100

    return (
        <div className="relative w-2/5 max-w-[150px] rounded-md bg-secondary overflow-hidden">
            <div
                className={`content-[''] absolute left-0 bottom-0 w-full bg-gradient-to-b from-gradient-cyan to-gradient-blue ${animateCharging ? 'animate-charging' : undefined}`}
                style={{height: `${charge}%`}}>
            </div>

            <div className="absolute flex flex-col justify-center items-center w-full h-full text-font-white">
                <span className="text-6xl">
                    {charge}
                </span>
                <span className="text-3xl">
                    %
                </span>
            </div>
        </div>
    )
}

export default Battery