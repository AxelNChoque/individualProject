import React from 'react';
import style from './landingPage.module.css';
import { NavLink } from 'react-router-dom';
import F1Logo from '../../assets/F1.svg'
const LandingPage = () => {

    return(
        <div className={style.container}>
            <div
                className={style.logoContainer}
            >
                <img
                src={F1Logo}
                className= {style.logo}
            />
            </div>
            <div
                className={style.buttonContainer}
            >
                <NavLink
                to='/home'
            >
                <button
                    className={style.but}
                >Start</button>
            </NavLink>
            </div>
            
        </div>
    )
}

export default LandingPage;