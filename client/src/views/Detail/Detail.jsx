import React, { useEffect } from "react";
import normalizeDrivers from "../../helpers/normalization";
import { useDispatch, useSelector } from "react-redux";
import { detailDriver } from "../../redux/actions/actions";
import { NavLink, useParams } from "react-router-dom";


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
        <div>
            <NavLink
                to='/home'
            >
                Home
            </NavLink>
            <h2>Name: {`${finalDriver.name} ${finalDriver.surname}`}</h2>
            <h2>Nationalirt: {finalDriver.nationality}</h2>
            <h2>Teams: {finalDriver.teams}</h2>
            <h2>Description: {finalDriver.description}</h2>
            <img src={finalDriver.image} alt={finalDriver.name} /> 
        </div>
    )
};

export default Detail;