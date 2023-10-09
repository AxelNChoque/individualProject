import React, { useEffect, useState } from "react";
import style from './home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, paginate } from "../../redux/actions/actions";

const Home = () => {
    const items = 8;
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const allDrivers = useSelector(state => state.drivers);
    const currentDrivers = allDrivers.splice(currentPage, items);
    useEffect(() => {
        dispatch(getDrivers());
    }, [dispatch]);


    if (!Array.isArray(currentDrivers) || currentDrivers.length === 0) {
        return <div>Cargando...</div>;
    }


    

    const paginateDrivers = (event, page) => {
        event.preventDefault();
        dispatch(paginate(page));
    }

    return (
        <div className={style.containter}>
            <div className={style.navbarBox}>
                <Navbar></Navbar>
            </div>
            <div className={style.cardsBox}>
                <Cards drivers={currentDrivers} />
            </div>
            <div>
                <button
                    name='prev'
                    onClick={e => paginateDrivers(e, currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    -
                </button>
                <button
                    name='next'
                    onClick={e => paginateDrivers(e, currentPage + 1)}
                    disabled={currentPage * 8 >= allDrivers.length}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Home;