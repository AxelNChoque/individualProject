import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTeams } from "../../redux/actions/actions";
import validate from '../../helpers/validate';
import style from './form.module.css';
import {addDriver} from '../../redux/actions/actions';

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
    const initialState = {
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: [],
    };

    const initialErrors = {
        name: '',
        surname: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: '',
    };


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

                setErrors(
                    validate({
                        ...newDriver,
                        teams: [...uniqueMemoryValues]
                    })
                )
                return updatedMemory;
            });

        } else {
            setNewDriver({
                ...newDriver,
                [event.target.name]: event.target.value
            })
            setErrors(
                validate({
                    ...newDriver,
                    [event.target.name]: event.target.value
                })
            )
        }
        
    }

    const countHandler = event => {
        event.preventDefault();
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
        let errorFLag = false;

        for(let error in errors){
            if(errors[error] === '') {
                errorFLag = false;
            } else {
                errorFLag = true;
                break;
            }
        }

        if(!errorFLag){
            dispatch(addDriver(newDriver))
            setNewDriver(initialState);
            setErrors(initialErrors);
            setQuantityTeams(1);
            setMemory({});
        } else {
            alert('Error adding new driver');
        }
    }
    


    return(
        <div className={style.formContainer}>
            <div
                className={style.navlink}
            >
                <NavLink
                to='/home'
            >
                <button
                    className={style.button}
                >Home</button>
            </NavLink>
            </div>
            
            <div
                className={style.menuContainer}
            >
            <form
                onSubmit={submitHandler}
                className={style.form}
            >
                    <div className={style.formElements}>
                    <div
                    className={style.completeName}
                >
                    <div
                        className={style.names}
                    >
                    <label
                        className={style.title}
                    >
                    Name
                </label>
                <input 
                    name='name'
                    onChange={changeHandler}
                    type="text"
                    value={newDriver.name}
                />
                {
                    <p className={style.errors}> {errors.name || "\u00A0"} </p>
                }

                    </div>
                    <div
                        className={style.names}
                    >
                        
                    <label
                        className={style.title}
                    >
                    Surname
                </label>
                <input 
                    name='surname'
                    onChange={changeHandler}
                    type="text"
                    value={newDriver.surname}
                />

                {
                    <p className={style.errors}> {errors.surname || "\u00A0"} </p>
                }
                    </div>
                </div>

                <label
                        className={style.title}
                >
                    Nationality    
                </label>
                <input 
                    name='nationality'
                    onChange={changeHandler}
                    type="text"
                    value={newDriver.nationality}
                />
                {
                    <p className={style.errors}> {errors.nationality || "\u00A0"} </p>
                }
                <label
                    className={style.title}
                >
                    Image
                </label>
                <input 
                    name='image'
                    onChange={changeHandler}
                    type="text"
                    value={newDriver.image}
                />

                {
                    <p className={style.errors}> {errors.image || "\u00A0"} </p>
                }
                <label
                    className={style.title}
                >
                    Birthdate                  
                </label>
                <input 
                    name='dob'
                    onChange={changeHandler}
                    type="date"
                    value={newDriver.dob}
                />
                {
                    <p className={style.errors}> {errors.dob || "\u00A0"} </p>
                }                

                <label
                    className={style.title}
                >
                    Description
                </label>
                <input
                    className={style.desc} 
                    name='description'
                    onChange={changeHandler}
                    type="text"
                    value={newDriver.description}
                />
                {
                    <p className={style.errors}> {errors.description || "\u00A0"} </p>
                }

                <div className= {style.buttons}>
                <button
                    value={0}
                    onClick={countHandler}
                >-</button>
                <button
                    value={1}
                    onClick={countHandler}
                >+</button>
                </div>
                <div
                    className={style.selectsBox}
                >
                    {
                    Array.from({ length: quantityTeams }, (_, index) => (
                        <select
                            key={index}
                            name={`team${index}`}
                            onChange={changeHandler}
                            value={newDriver.teams[index]}
                            className={style.selects}
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
                </div>

                {
                    <p className={style.errors}> {errors.teams || "\u00A0"} </p>
                }
                <button 
                className={style.submitBut}
                type="submit"
                >
                    Create Driver
                </button>
                    </div>

            </form>
            </div>
        </div>
    )
}

export default Form;