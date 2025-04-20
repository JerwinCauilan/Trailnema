
function MovieCardSkeleton() {
    return (
        <div>
            <div className="col">
                <div className="my-3 border-2 border-zinc-800 rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <div className="aspect-[3/4] w-full placeholder"></div>
                        <div className="absolute -bottom-6 w-full h-28 _carouselGradient"></div>
                    </div>
                    <div className="bg-[#222] p-2">
                        <span className="md:text-[17px] text-sm w-[70%] placeholder"></span>
                        <div className="md:text-[15px] text-[13px] text-zinc-300 mt-2">
                            <span className="w-[90%] placeholder"></span><br />
                            <span className="w-[80%] placeholder"></span><br />
                            <span className="w-[40%] placeholder"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCardSkeleton
