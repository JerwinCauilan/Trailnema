
function HomeCarouselSkeleton() {
    return (
        <div>
            <div className="relative h-full placeholder-glow">
                <div className="w-full h-full min-h-[300px] object-cover aspect-[7/4] placeholder"></div>
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2] "></div>
                <div className="absolute bottom-0 w-full h-24 _carouselGradient"></div>
            </div>

            <div className="md:flex absolute bottom-0 px-4 gap-4 items-end w-full">
                <div className="md:w-[160px] w-[120px] aspect-[4/5] placeholder"></div>
                <div className="flex flex-col gap-1 w-full">
                    <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl w-[40%] placeholder"></span>
                    <span className="w-[95%] lg:text-xl md:text-lg text-md placeholder"></span>
                    <span className="w-[85%] lg:text-xl md:text-lg text-md placeholder"></span>
                    <span className="w-[35%] lg:text-xl md:text-lg text-md placeholder"></span>
                    <div className="flex items-center gap-1 lg:text-lg md:text-md text-sm w-[10%] placeholder"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeCarouselSkeleton
