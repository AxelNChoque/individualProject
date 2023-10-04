import React from "react";
import Card from "../Card/Card";

const Cards = (props) => {
    const { drivers } = props;
    return(
        <div>
            {
                drivers && drivers.map( driver => {
                    <Card
                        key = {driver.id}
                        name = {driver.name.forename}
                        surname = {driver.name.surname}
                        image = {driver.image.url}
                        teams = {driver.teams}
                    />
                })
            }
        </div>
    )
}

export default Cards;