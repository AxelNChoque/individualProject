import React from "react";
import { NavLink } from "react-router-dom";
import style from './card.module.css';

const Card = (props) => {
    const { id, name, surname, image, nationality, teams} = props;
    return(
        <div className={style.container}>
            <NavLink
            to={`/detail/${id}`}
            >
                <img className={style.image} src={image} alt={surname}/>
            </NavLink>
            <div className={style.desc}>
            <p>{`${name} ${surname}`}</p>
            <p>{nationality}</p>
            <p>{teams}</p>
            </div>
        </div>
    )
}

export default Card;