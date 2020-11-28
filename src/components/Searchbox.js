import React from 'react';

const Searchbox = (props) => {


    return (
        <div className="search-box">
            <input id="search" type="text" placeholder="type for search"/>
            <label htmlFor="search"><i className="fas fa-search"></i></label>
        </div>
    );
};

export default Searchbox;
