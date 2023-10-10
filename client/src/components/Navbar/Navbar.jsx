import React from "react";
import style from './navbar.module.css'
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import { NavLink } from "react-router-dom";


const Navbar = ({allTeams, filter, order}) => {
    return(
        <div>
            <NavLink
                to='/newdriver'
            >
                <button>New driver</button>
            </NavLink>
            
            <Searchbar/>
            <Filters
                allTeams = {allTeams}
                filter = {filter}
                order = {order}
            />
        </div>
    )
};

export default Navbar;