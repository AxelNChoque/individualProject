import React from "react";
import style from './navbar.module.css'
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";


const Navbar = () => {
    return(
        <div>
            <Searchbar/>
            <Filters/>
        </div>
    )
};

export default Navbar;