import TyrePressure from './TyrePressure'

const Vehicle = ({ model, image, tyrePressures }) => {
    return (
        <section className="flex flex-col justify-center items-center gap-y-6 h-full w-screen md:w-3/5 p-4 md:p-10">
            <span className="self-end text-font-dark text-3xl">
                {model}
            </span>

            <img
                src={`images/${image}`}
                alt={model}
                className="w-full md:max-w-[80%]" />

            <div className="flex justify-between items-center md:w-[90%]">
                <TyrePressure percentage={tyrePressures[0]} />

                <span className="text-font-dark text-2xl text-center">
                    Tyre Pressure
                </span>

                <TyrePressure percentage={tyrePressures[1]} />
            </div>

        </section>
    )
}

export default Vehicle