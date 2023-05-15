const Stats = ({ label, value, unit, className }) => {
    return (
        <div className={`flex flex-col justify-between h-[125px] p-2 bg-secondary rounded-lg ${className}`}>
            <span className="text-font-dark text-md">
                {label}
            </span>
            <div className="self-end">
                <span className="mr-1 text-font-med text-4xl">
                    {value}
                </span>
                <span className="text-font-dark text-2xl">
                    {unit}
                </span>
            </div>
        </div>
    )
}

export default Stats