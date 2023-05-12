const Stats = ({ label, value, unit }) => {
    return (
        <div>
            <span>
                {label}
            </span>
            <div>
                <span>
                    {value}
                </span>
                <span>
                    {unit}
                </span>
            </div>
        </div>
    )
}

export default Stats