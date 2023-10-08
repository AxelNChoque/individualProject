import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTeams } from "../../redux/actions/actions";
import validate from '../../helpers/validate';

const Form = () => {
    const dispatch = useDispatch();
    const allTeams = useSelector(state => state.teams);
    const [quantityTeams, setQuantityTeams] = useState(1);
    const [memory, setMemory] = useState({});
    const [errors, setErrors] = useState({
        name:'',
        surname:'',
        nationality:'',
        image:'',
        dob:'',
        description:'',
        teams:'',
    })

    useEffect(() => {
        dispatch(getTeams());
    },[dispatch]);


    const [newDriver, setNewDriver] = useState({
        name:'',
        surname:'',
        nationality:'',
        image:'',
        dob:'',
        description:'',
        teams:[],
    })

    const changeHandler = event => {
        const {name, value} = event.target;
        if(name.includes('team')){
            setMemory(() => {
                const updatedMemory = {
                    ...memory,
                    [name]: value
                };
        
                const memoryValues = Object.values(updatedMemory);
                const uniqueMemoryValues = [...new Set(memoryValues.filter(team => team !== ''))];
                
                
                setNewDriver({
                    ...newDriver,
                    teams:[...uniqueMemoryValues]
                })
        
                return updatedMemory;
            });

        } else {
            setNewDriver({
                ...newDriver,
                [event.target.name]: event.target.value
            })
        }
        
    }

    const countHandler = event => {
        const { value } = event.target;
    
        if (!Number(value)) {
            if (quantityTeams > 1) {
                setQuantityTeams(prevQuantity => prevQuantity - 1);
            }
        } else {
            if(quantityTeams<5){
                setQuantityTeams(prevQuantity => prevQuantity + 1);
            }
        }
    }

    

    const submitHandler = event => {
        event.preventDefault();
        setNewDriver({ ...newDriver, teams: newDriver.teams.slice(0, quantityTeams) })
        setErrors(
            validate({
                ...newDriver,
                teams:[...newDriver.teams]
            })
        )
        console.log(errors);

    }
    


    return(
        <div>

            <NavLink
                to='/home'
            >
                <button>Home</button>
            </NavLink>

            <form
                onSubmit={submitHandler}
            >
                <label>
                    Name
                </label>
                <input 
                    name='name'
                    onChange={changeHandler}
                    type="text"
                />
                {
                    errors.name ? <label>{errors.name}</label> : ''
                }

                <label>
                    Surname
                </label>
                <input 
                    name='surname'
                    onChange={changeHandler}
                    type="text"
                />
                {
                    errors.surname ? <label>{errors.surname}</label> : ''
                }

                <label>
                    Nationality    
                </label>
                <input 
                    name='nationality'
                    onChange={changeHandler}
                    type="text"
                />
                {
                    errors.nationality ? <label>{errors.nationality}</label> : ''
                }

                <label>
                    Image
                </label>
                <input 
                    name='image'
                    onChange={changeHandler}
                    type="text"
                />
                {
                    errors.image ? <label>{errors.image}</label> : ''
                }

                <label>
                    Birthdate                  
                </label>
                <input 
                    name='dob'
                    onChange={changeHandler}
                    type="date"
                />
                {
                    errors.dob ? <label>{errors.dob}</label> : ''
                }

                <label>
                    Description
                </label>
                <input 
                    name='description'
                    onChange={changeHandler}
                    type="text"
                />
                {
                    errors.description ? <label>{errors.description}</label> : ''
                }

                <button
                    value={0}
                    onClick={countHandler}
                >-</button>
                <button
                    value={1}
                    onClick={countHandler}
                >+</button>
                {
                    Array.from({ length: quantityTeams }, (_, index) => (
                        <select
                            key={index}
                            name={`team${index}`}
                            onChange={changeHandler}
                        >
                            <option value=''>Select Team</option>
                            {
                                allTeams.map(team => {
                                    return <option key={team} value={team}>{team}</option>
                                })
                            }
                        </select>
                    ))
                }   

                {
                    errors.teams ? <label>{errors.teams}</label> : ''
                }
                <input type="submit"></input>

            </form>
        </div>
    )
}

export default Form;