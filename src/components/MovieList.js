import React from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = (props) => {

    return(
        

        <div className="row">
            <div className="title">
                <h2>My movies</h2>
                <Filter handleFiltered={(typefltr)=>props.handleFiltered(typefltr)}/>
            </div>
            <div className="row-posters mymovies">
                <button onClick={props.onShowChange}><i className="fas fa-plus"></i></button>
                {props.movies.map(elem => <MovieCard  key={elem.id} rating={elem.rating} img={elem.img} title={elem.title} />
                )}
            </div>
        </div>
        
    )
}

export default MovieList
