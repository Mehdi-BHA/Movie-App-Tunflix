import React, {useEffect, useState} from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

const Row = ({title,fetchUrl}) => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([]);

    useEffect(()=>{

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])

    return (
        <div className="row">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="row-posters">
                {movies.map(movie => <MovieCard key={movie.id} rating={movie.vote_average} img={`${baseImgUrl}${movie.poster_path}`} title={movie.original_title} />
                )}
            </div>

        </div>
    );
};

export default Row;
