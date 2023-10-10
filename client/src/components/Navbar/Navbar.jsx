import React from "react";
import style from './navbar.module.css'
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import { NavLink } from "react-router-dom";


const Navbar = ({allTeams, onChange}) => {
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
                onChange = {onChange}
            />
        </div>
    )
};

export default Navbar;