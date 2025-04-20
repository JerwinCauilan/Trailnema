import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import YouTube from "react-youtube";


function Trailers({ movieId }: Readonly<{ movieId: string }>) {
    const [trailer, setTrailer] = useState<{ key: string, id: string, name: string }[]>([]);
    
    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const response = await baseApi.get(`/3/movie/${movieId}/videos?language=en-US`);
                const trailerObj = response.data.results.filter((data: { type: string }) => data.type === "Trailer");
                // console.log(trailerObj)
                setTrailer(trailerObj);
            } catch (err) {
                console.error("Error fetching trailer:",err);
            }
        };

        fetchTrailers();
    }, [movieId]);

    // console.log(trailer)

    const opts = {
        width: "380",
        height: "280",
    }

    return (
        <div className="">
            {trailer.length > 0 && 
                <div className="md:mt-16 mt-4">
                    {/* <h1 className="text-3xl text-yellow-500 font-bold">Watch Trailers</h1> */}
                    <span className="md:text-3xl sm:text-2xl text-xl text-yellow-500 font-bold">Watch Trailers</span>
                    <div className="flex flex-wrap gap-4">
                        {trailer.map(link => (
                            <div key={link.id} className="flex flex-col sm:gap-2 mt-4">
                                <YouTube videoId={link?.key} opts={opts} />
                                {/* <h1 className="text-xl w-[380px]">{link.name}</h1> */}
                                <span className="text-xl w-[380px]">{link.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Trailers
