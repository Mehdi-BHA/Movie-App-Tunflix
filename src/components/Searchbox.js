import React from 'react';

const Searchbox = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder="type for search"/>
            <button><i className="fas fa-search"></i></button>
        </div>
    );
};

export default Searchbox;
