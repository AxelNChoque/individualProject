import React, { useState } from "react";
import style from './searchbar.module.css';

const Searchbar = ({search}) => {
    const [name, setName] = useState('');

    const handleChange = event => {
        setName(event.target.value);
    }

    const handleSearch = () => {
        search(name);
    }
    return(
        <div
            className={style.searchContainer}
        >
            <input
                className={style.searchInput}
            onChange={handleChange}
            type='search' 
            placeholder="###" 
            >
                
            </input>
            <button
                className={style.searchBut}
                onClick={handleSearch}
            >Search</button>
        </div>
    )
};

export default Searchbar;