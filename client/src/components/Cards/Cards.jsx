import React from "react";
import Card from "../Card/Card.jsx";
import style from './cards.module.css';
import normalizeDrivers from '../../helpers/normalization.jsx';

const Cards = ({drivers}) => {

    const newDrivers = normalizeDrivers(drivers);

    return(
        <div className={style.container}>
            {
                newDrivers.map( driver => {
                    return <Card
                        key = {driver.id}
                        id = {driver.id}
                        name = {driver.name}
                        surname = {driver.surname}
                        nationality= {driver.nationality}
                        image = {driver.image}
                        teams = {driver.teams}
                        dob = {driver.dob}
                    />
                })
            }
        </div>
    )
}

export default Cards;