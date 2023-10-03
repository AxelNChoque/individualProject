import React from 'react';
import style from './landingPage.module.css';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {

    return(
        <div className={style.container}>
            <NavLink
                to='/home'
            >
                <button>Click here!</button>
            </NavLink>
        </div>
    )
}

export default LandingPage;