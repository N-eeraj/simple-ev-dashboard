const Range = ({ range }) => {
    return (
        <div className="
            relative w-2/5 aspect-square rounded-full bg-gradient-to-b from-gradient-green to-gradient-cyan before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:bg-gradient-to-b before:from-gradient-green before:to-gradient-cyan before:blur-md before:z-0 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] after:rounded-full after:bg-primary after:-translate-x-1/2 after:-translate-y-1/2">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="text-font-white">
                    {range}
                </span>
                <span className="text-font-dark">
                    Km
                </span>
            </div>
        </div>
    )
}

export default Range