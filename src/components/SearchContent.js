import React from 'react';
import MovieCard from './MovieCard'

function SearchContent({list}) {
    return (
        <div className="search-content">
            {list.map(elem=>{return <MovieCard key={elem.id} rating={elem.rating} img={elem.img} title={elem.title} />})
            }}
        </div>
    )
}

export default SearchContent
