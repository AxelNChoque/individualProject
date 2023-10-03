import React from "react";
import style from './searchbar.module.css';

const Searchbar = () => {
    return(
        <div>
            <input
            type='search' 
            placeholder="###" 
            >
                
            </input>
            <button>Search</button>
        </div>
    )
};

export default Searchbar;