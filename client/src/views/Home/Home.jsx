import React from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    return(
        <div
            className={style.containter}
        >
            <div
                className={style.navbarBox}
            >
            <Navbar></Navbar>
            </div>
            <div
                className={style.cardsBox}
            >
                <Cards></Cards>
            </div>
            
        </div>
    )
}

export default Home;