const Battery = ({ charge }) => {
    return (
        <div className="relative w-2/5 max-w-[150px] rounded-md bg-secondary">
            <div
                className="content-[''] absolute left-0 bottom-0 w-full rounded-md bg-gradient-to-b from-gradient-cyan to-gradient-blue"
                style={{height: `${charge}%`}}>
                </div>
            <div className="absolute z-10">
                <span>
                    {charge}
                </span>
                <span>
                    %
                </span>
            </div>
        </div>
    )
}

export default Battery