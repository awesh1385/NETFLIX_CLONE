import { useEffect, useState } from "react";
import requests from "../Requests";




const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(requests.requestPopular);
            const json = await response.json();
            setMovies(json.results);
        }
        fetchMovies();
    }, []);

    const truncateString =(str,num) =>{
        if(str?.length>num){
            return str.slice(0,num)+" ..."
        }else{
            return str;
        }
    }

    return (
        <div className="w-full h-[550px] text-white ">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={`${movie?.title}`}
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8 ">
                <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black py-2 px-5">Play</button>
                        <button className="border bg-black text-white py-2 px-5 ml-4">Watch Later</button>
                        <p className="text-gray-400 text-sm mt-2">Released: {movie?.release_date}</p>
                        <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{truncateString(movie?.overview,150)}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Main;
