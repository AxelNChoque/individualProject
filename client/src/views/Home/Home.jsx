import React, { useEffect, useState } from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";

const Home = () => {
    const dispatch = useDispatch;
    const [currentPage, setCurrentPage]= useState(1);

    const allDrivers = useSelector(state=> state.drivers)
    const driversPerPage = 9;
    const lastDriverIndex = currentPage * driversPerPage;
    const firstDriverIndex = lastDriverIndex - driversPerPage;
    const currentDrivers = allDrivers.slice(firstDriverIndex, lastDriverIndex);

    useEffect(() => {
        dispatch(getDrivers);
    },[dispatch]);

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