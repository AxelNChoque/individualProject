import React, { useEffect, useState } from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { filter, getDrivers, getTeams, paginate } from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();

    const currentDrivers = useSelector(state => state.drivers);
    const currentPage = useSelector(state => state.currentPage);
    const lastPage = useSelector(state => state.lastPage);
    const allTeams = useSelector(state => state.teams);
    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams());
    }, [dispatch]);

    if (!Array.isArray(currentDrivers) || currentDrivers.length === 0) {
        return <div>Cargando...</div>;

    }

    const filterPerTeam = event => {
        console.log(event);
        dispatch(filter(event));
    }
    

    const paginateDrivers = event => {
        dispatch(paginate(event.target.name));
    }

    return (
        <div className={style.containter}>

            <div className={style.navbarBox}>
                <Navbar
                    allTeams={allTeams}
                    onChange={filterPerTeam}
                ></Navbar>
            </div>

            <div className={style.cardsBox}>
                <Cards drivers={currentDrivers} />
            </div>

            <div>

                <button 
                    name='prev' 
                    onClick={paginateDrivers}
                    disabled= { currentPage === 0}
                >
                    -
                </button>
            
                <button 
                    name='next' 
                    onClick={paginateDrivers}
                    disabled={lastPage === true}
                >
                    +
                </button>
      
            </div>
        </div>
    );
};

export default Home;