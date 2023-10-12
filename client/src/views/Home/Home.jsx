import React, { useEffect, useState } from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { filter, getDrivers, getTeams, orderDrivers, paginate, searchDriver } from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();

    const currentDrivers = useSelector(state => state.drivers);
    const allTeams = useSelector(state => state.teams);
    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams());
    }, [dispatch]);

    if (!Array.isArray(currentDrivers) || currentDrivers.length === 0) {
        return <div>Loading...</div>;

    }

    const filterPerTeam = event => {
        dispatch(filter(event));
    }
    

    const paginateDrivers = event => {
        dispatch(paginate(event.target.name));
    }
    const order = event => {
        dispatch(orderDrivers(event));
    }
    const search = (e) => {
        dispatch(searchDriver(e));
    }

    return (
        <div className={style.containter}>

            <div className={style.navbarBox}>
                <Navbar
                    search={search}
                    allTeams={allTeams}
                    filter={filterPerTeam}
                    order={order}
                ></Navbar>
            </div>

            <div className={style.cardsBox}>
                <Cards drivers={currentDrivers} />
            </div>

            <div
                className={style.buttonsContainer}
            >

                <button 
                    className={style.button}
                    name='prev' 
                    onClick={paginateDrivers}
                >
                    -
                </button>
            
                <button 
                    className={style.button}
                    name='next' 
                    onClick={paginateDrivers}
                >
                    +
                </button>
      
            </div>
        </div>
    );
};

export default Home;