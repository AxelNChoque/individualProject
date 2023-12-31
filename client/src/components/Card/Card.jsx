import React from "react";
import { NavLink } from "react-router-dom";
import style from './card.module.css';

const Card = (props) => {
    const { id, name, surname, image, nationality, teams, dob} = props;
    let dobWithoutHour = dob;
    if(dob.length > 10){
        dobWithoutHour = dob.substring(0,10); 
    }
    return(
        <div className={style.container}>
            <NavLink
            to={`/detail/${id}`}
            >
                <img className={style.image} src={image} alt={surname}/>
            </NavLink>
            <div className={style.descBox}>
            <p
                className={style.name}
            >{`${name} ${surname}`}</p>
            <div
                className={style.desc}
            >
            
            <p>{nationality}</p>
            <p>{dobWithoutHour}</p>

                <p>
                {
                 teams ? teams.map(team => {
                        return `${team}  `         
                    }) : ''   
                }
                </p>    
            </div>

            </div>
        </div>
    )
}

export default Card;