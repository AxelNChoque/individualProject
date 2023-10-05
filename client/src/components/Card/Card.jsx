import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    const { name, surname, image, teams} = props;
    return(
        <div>
            <NavLink>
                <img src={image} alt={surname}/>
            </NavLink>
            <p>{`${name} ${surname}`}</p>
            <p>{teams}</p>
        </div>
    )
}

export default Card;