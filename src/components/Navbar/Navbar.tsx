import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { Link } from "react-router"
import { baseApi } from "../../api/axiosInstance";
import { CarouselMoviesType } from "../../utils/type";
import CarouselMiniCard from "../Home/CarouselMiniCard";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [search, setSearch] = useState("");
    const [searchedList, setSearchedList] = useState<CarouselMoviesType[]>([]);
    const [showSearch, setShowSearch] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            (e?.target as HTMLInputElement).blur();
        }
    };

    const toggleShow = (bool: boolean) => {
        setShowSearch(bool)
    };

    const fetchSearch = async () => {
        try {
            const response = await baseApi.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`);
            setSearchedList(response.data.results);
        } catch (err) {
            console.error("Error searching movies:",err);
        }
    };

    useEffect(() => {
        if(search.length > 0) {
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
        fetchSearch()
    }, [search]);

    return (
        <nav className="bg-[#121212] py-2">
            <div className="flex justify-between lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
                <div className="flex items-center lg:space-x-16 sm:space-x-8 space-x-1">
                    <div className="flex flex-col text-yellow-500">
                        {/* <h1 className="text-[18px] text-lg leading-4">ALLABOUT</h1>
                        <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1> */}
                        {/* <span className="text-[18px] leading-4">ALLABOUT</span>
                        <span className="text-[24px] leading-5 font-semibold">MOVIES</span> */}
                        <img src="/trailnema-dark.svg" className="object-cover w-48" alt="" />
                    </div>
                    <Link to="/movies" className="text-yellow-500 sm:text-[18px] text-md hover:underline">EXPLORE</Link>
                </div>
                <div className="relative">
                    <input 
                        className="md:w-[500px] sm:w-[350px] w-[180px] h-10 bg-black text-[#c2c2c2] md:text-lg sm:text-md text-sm outline-none sm:px-4 px-3 placeholder:text-[#646464] rounded-xl"
                        placeholder="search"
                        type="text" 
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        onClick={() => toggleShow(true)}
                    />
                    {showSearch && search.length > 0 && <div className="text-yellow-500 sm:text-2xl text-xl absolute z-30 top-2 right-1" onClick={() => toggleShow(false)}><IoClose/></div>}
                    {showSearch && search.length > 0 && <div className="relative" onClick={() => toggleShow(false)}>
                        <div className="sm:absolute fixed left-0 w-full sm:max-w-[500px] bg-zinc-800 z-50 rounded-xl">
                            <div className="py-3 pl-5">
                                <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
                                    {searchedList.length > 0 && searchedList.map((item, index) => 
                                        <CarouselMiniCard carouselMovies={searchedList} item={index} index={index} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
