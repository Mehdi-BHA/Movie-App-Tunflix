import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';

function MovieCard(props) {


    const handleLoved = (e) => {
        e.target.classList.toggle('fas')
        e.target.classList.toggle('far')
        e.target.classList.toggle('fa-heart-loved')
    }

    return (
            <div key={props.id} className="movie-card">
                    { <div className="stars"><ReactStars edit={false} value={props.rating/2} size={24} isHalf={true} activeColor="red" /></div>}
                    <Link to={`movies/${props.title}`}><img src={props.img} alt={props.title} /></Link>
                    <div className="movie-infos">
                        <button><i className="fas fa-play"></i></button>
                        <button onClick={(e)=>handleLoved(e)}><i className="far fa-heart"></i></button>
                        <button><i className="fas fa-arrow-down"></i></button>
                    </div>
            </div>
    )
}

export default MovieCard
