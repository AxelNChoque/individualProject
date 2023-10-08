import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTeams } from "../../redux/actions/actions";

const Form = () => {
    const dispatch = useDispatch();
    const allTeams = useSelector(state => state.teams);

    useEffect(() => {
        dispatch(getTeams());
    },[dispatch]);

    const [newDriver, setNewDriver] = useState({
        name:'',
        surname:'',
        nationality:'',
        image:'',
        birthdate:'',
        description:'',
        teams:[],
    })

    const changeHandler = event => {

    }


    return(
        <div>

            <NavLink
                to='/home'
            >
                <button>Home</button>
            </NavLink>

            <form>
                <label>
                    Name
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />

                <label>
                    Surname
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />

                <label>
                    Nationality    
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />

                <label>
                    Image
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />

                <label>
                    Birthdate                  
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />

                <label>
                    Description
                </label>
                <input 
                    onChange={changeHandler}
                    type="text"
                />
                <select>
                    {
                        allTeams.map(team => {
                           return <option key={team} value={team}>{team}</option>
                        })
                    }
                </select>
                <input type="submit"></input>

            </form>
        </div>
    )
}

export default Form;