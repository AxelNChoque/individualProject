import React from "react";
import style from './navbar.module.css'
import Searchbar from "../Searchbar/Searchbar";
import Filters from "../Filters/Filters";
import { NavLink } from "react-router-dom";
import F1Logo from "../../assets/F1.svg";


const Navbar = ({allTeams, filter, order, search, filter2}) => {
    return(
        <div>

            <div 
                className={style.newDriverButton}
            >
                            <img
                src={F1Logo}
                className= {style.logo}
            />
            <div
                
                className={style.buttonContainer}
            >
                <NavLink
                to='/newdriver'
            >
                <button
                    className={style.button}
                >
                    New driver</button>
            </NavLink>
            
            </div>
            
            </div>
            <div
                className={style.searchFilterContainer}
            >
                <Searchbar
                className= {style.searchbar}
                search = {search}
                />
            
                <Filters
                    allTeams = {allTeams}
                    filter = {filter}
                    order = {order}
                    filter2 = {filter2}
                />
            </div>
            
        </div>
    )
};

export default Navbar;