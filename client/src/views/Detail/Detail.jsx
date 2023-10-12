import React, { useEffect } from "react";
import normalizeDrivers from "../../helpers/normalization";
import { useDispatch, useSelector } from "react-redux";
import { detailDriver } from "../../redux/actions/actions";
import { NavLink, useParams } from "react-router-dom";
import style from './detail.module.css';


const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(detailDriver(id));

    }, [dispatch]);
    const driver = useSelector(state => state.driver);
    console.log(driver);
    const driverArray = [];
    driverArray.push(driver);
    const newDriver = normalizeDrivers(driverArray);
    const finalDriver = newDriver[0];
    
    
        if (!newDriver) {
        return <div>Loading...</div>;
    }

    return(
        <div
            className={style.container}
        >
            <div
                className={style.nav}
            >
                <NavLink
                to='/home'
            >
                <button
                    className={style.button}
                >
                    Home
                </button>
            </NavLink>
            </div>
            <div
                className={style.downbox}
            >
                <div
                className={style.detailContainer}
            >
                <h2
                className={style.name}
            >Name: {`${finalDriver.name} ${finalDriver.surname}`}</h2>
            <div
                className={style.desc}
            >
            <p>Nationality: {finalDriver.nationality}</p>

                 <p> Teams:  {finalDriver.teams ? finalDriver.teams.map(team => {
                        return `${team}  `         
                    }) : ''}  
                </p> 

            <p>Description: {finalDriver.description}</p>
            <div
                className={style.imgContainer}
            >
                <img 
                className={style.img}
            src={finalDriver.image} alt={finalDriver.name} /> 
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
};

export default Detail;