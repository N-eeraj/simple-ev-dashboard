const Vehicle = ({ model, image, tyrePressures }) => {
    return (
        <div className="flex flex-col justify-center align-middle gap-y-6 h-full w-screen md:w-3/5 p-10">
            <span className="self-end text-font-dark text-3xl">
                {model}
            </span>

            <img
                src={`images/${image}`}
                alt={model}
                className="w-[90%]" />

            <div className="flex justify-between align-middle">
                <span>
                    {tyrePressures[0]}
                </span>

                <span className="text-font-dark text-2xl">
                    Tyre Pressure
                </span>

                <span>
                    {tyrePressures[0]}
                </span>
            </div>

        </div>
    )
}

export default Vehicle