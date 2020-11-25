import React, {useEffect,useState} from 'react';
import ReactStars from 'react-rating-stars-component';

function AddMovie(props) {
    const [newMovie,setNewMovie] = useState({title:"",desc:"",img:"",rating:1})

    const handleChange = (e) => {
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    const ratingChanged = (newRating) => {
        setNewMovie({...newMovie,rating:newRating*2})
    }


    return (
        <div className="popup">
            <button className="close-popup" onClick={props.onPopupClose}><i className="fas fa-times-circle"></i></button>
            <h1>Add a movie</h1>
                    <div className="formbox">
                        <div className="inputbox">
                            <input type="text" name="title" value={newMovie.title} onChange={(e)=>handleChange(e)}></input>
                            <span>Title:</span>
                        </div>
                        <div className="inputbox">
                            <textarea type="text" name="desc" value={newMovie.desc} onChange={(e)=>handleChange(e)}></textarea>
                            <span>Description:</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="img" value={newMovie.img} onChange={(e)=>handleChange(e)}></input>
                            <span>Poster URL:</span>
                        </div>
                        <div className="inputbox rating">
                            <span >Rating: <ReactStars size={24} isHalf={true} activeColor="red" value={newMovie.rating} onChange={ratingChanged}/></span>
                        </div>
                        <div className="inputbox">
                            <button className="btn-add-movie" onClick={()=>props.addClick(newMovie)}>Add the movie</button>
                        </div>
                    </div>
        </div>
    )
}

export default AddMovie
