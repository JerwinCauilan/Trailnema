import { useState } from "react";
import { imagePath } from "../../utils/constant";
import { MovieCardType } from "../../utils/type";
import { Link } from "react-router";

interface MovieCardProps {
    movieData: MovieCardType
}

function MovieCard({ movieData }: Readonly<MovieCardProps>) {
    const [hover, setHover] = useState<number | null>(null);

    return (
        <Link to={`/details/${movieData.id}`}>
            <div className="col"
                onMouseEnter={() => setHover(movieData.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden ${movieData.id === hover ? "scale-[102%]" : ""} duration-200`}>
                    <div className="relative overflow-hidden">
                        <img src={`${imagePath}${movieData.poster_path}`} className="aspect-[3/4]" alt="" />
                        <div className="absolute -bottom-6 w-full h-28 _carouselGradient"></div>
                    </div>
                    <div className="bg-[#222] p-2">
                        {/* <h1 className="text-[17px] font-semibold line-clamp-1">{movieData.title}</h1> */}
                        <span className={`md:text-[17px] text-sm font-semibold line-clamp-1 ${movieData.id === hover ? "underline" : ""}`}>{movieData.title}</span>
                        <div className="md:text-[15px] text-[13px] text-zinc-300 mt-2">
                            {/* <h1>Rating : {String(movieData.vote_average).substring(0, 3)}</h1>
                            <h1>Language : {movieData.original_language}</h1>
                            <h1>Release : {movieData.release_date}</h1> */}
                            <span>Rating : {String(movieData.vote_average).substring(0, 3)}</span><br />
                            <span>Language : {movieData.original_language}</span><br />
                            <span>Release : {movieData.release_date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;
