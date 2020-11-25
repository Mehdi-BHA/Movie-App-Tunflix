import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Row = ({title,fetchUrl}) => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original/"

    const [movie,setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random()*(request.data.results.length-1))])
            return request
        }
        fetchData();
    },[fetchUrl])


    return (
        <div className="banner" style={{
        backgroundImage :`url(${baseImgUrl}${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition:"center center"
        }}>
            <div style={{paddingLeft:"50px"}}>
                <div>
                    <h2>{movie.title || movie.name || movie.original_title}</h2>
                    <div className="banner-buttons">
                        <button className="banner-button"><i className="fas fa-play" style={{marginRight:"10px"}}></i>Play</button>
                        <button className="banner-button"><i className="fas fa-plus" style={{marginRight:"10px"}}></i>My list</button>
                    </div>
                </div>
                
                <p>{movie.overview}</p>
            </div>            
            <div className="banner-fade"></div>
        </div>
    );
};

export default Row;
