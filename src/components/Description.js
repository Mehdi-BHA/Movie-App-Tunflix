import React, {useState} from 'react';
import {data} from '../data';
import ReactStars from 'react-rating-stars-component';
import ModalVideo from 'react-modal-video';



const Description = (props) => {

    const handleLoved = (e) => {
        e.target.classList.toggle('fas')
        e.target.classList.toggle('far')
        e.target.classList.toggle('heart-loved')
    }

    const [isOpen, setOpen] = useState(false)

    const movie = data.filter((elem => elem.title === props.match.params.title))[0]

    return (
        <>
        <div className="description" style={{background:`url("${movie.backImg}")`, backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center top'}}>
            <div className="movie-desc" >
                <img src={movie.img} alt={props.title} />
                <div className="movie-info">
                    <h1 className="movie-title">{movie.title} <span>({movie.year})</span><ReactStars edit={false} value={movie.rating/2} size={27} isHalf={true} activeColor="red" /></h1>
                    <p className="movie-genre-duration">{movie.genre} - {movie.duration}</p>
                    <div className="movie-rate">
                        <button className="movie-btn" onClick={(e)=>handleLoved(e)}><i className="far fa-heart"></i></button>
                        <button className="movie-btn"><i className="far fa-bookmark"></i></button>
                        <button className="movie-btn play" onClick={()=> setOpen(true)}><i className="fas fa-play"></i><span>Trailer</span></button>
                    </div>
                    <p className="movie-synopsis"><span>Synopsis </span><br/>{movie.synopsis}</p>
                    <div className="movie-authors">
                        <div>{movie.author}<br/><span>Author</span></div>
                        <div>{movie.director}<br/><span>Director</span></div>
                        <div>{movie.screenplay}<br/><span>Screenplay</span></div>
                    </div>
                </div>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={movie.videoId} onClose={() => setOpen(false)} />
        <div className='actors'>
            {movie.actors.map(elem=>
                <div className="actor">
                    <img src={elem.img}></img>
                    <h1>{elem.name}</h1>
                </div>
                )}
        </div>


            <div className="movie-actors">

            </div>
        
        </>
    )
}

export default Description
