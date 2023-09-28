import React from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    return(
        <div>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    )
}

export default Home;