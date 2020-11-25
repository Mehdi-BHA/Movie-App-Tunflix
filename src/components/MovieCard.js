import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';

function MovieCard({id,rating,img,title}) {

    const [loved,setLoved] = useState(false)

    const handleLoved = (e) => {
        e.target.classList.toggle('fas')
        e.target.classList.toggle('far')
        e.target.classList.toggle('fa-heart-loved')
    }

    return (
            <div key={id} className="movie-card">
                    { <div className="stars"><ReactStars edit={false} value={rating/2} size={24} isHalf={true} activeColor="red" /></div>}
                    <img src={img} alt={title} />
                    <div className="movie-infos">
                        <button><i className="fas fa-play"></i></button>
                        <button onClick={(e)=>handleLoved(e)}><i className="far fa-heart"></i></button>
                        <button><i className="fas fa-arrow-down"></i></button>
                    </div>
            </div>
    )
}

export default MovieCard
