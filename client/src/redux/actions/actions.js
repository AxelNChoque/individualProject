import { ADD_DRIVER, REMOVE_DRIVER, TEAM_FILTER, ORDER, GET_DRIVERS, GET_TEAMS, PAGINATE, FILTER } from "./actions-types";
import axios from 'axios';

export const addDriver = (state) => {

    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/post/', state);
            const { data } = response;
            dispatch({
                type: ADD_DRIVER,
                payload: data,
            })
        } catch(err) {
            alert('Error adding driver');
        }
    }
}

export const removeDriver = (id) => {
    const endpoint = `http://localhost:5000/drivers/${id}`;
    return async dispatch => {
        try {
            const response = await axios.delete(endpoint);
            const { data } = response;
            dispatch({
                type: REMOVE_DRIVER,
                payload: data,
            })
        }catch(err) {
            alert('Error removing driver');
        }
    }
}

export const getDrivers = () => {
    const endpoint = `http://localhost:5000/drivers`;
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            const { data } = response;
            return dispatch({
                type:GET_DRIVERS,
                payload: data,
            });
        } catch(error) {
            alert('Error charging drivers');
        }
    }
}

export const getTeams = () => {
    const endpoint = `http://localhost:5000/driversteams`;
    return async dispatch => {
        try{
            const response = await axios.get(endpoint);
            const { data } = response;
            return dispatch({
                type:GET_TEAMS,
                payload:data,
            });
        } catch(error){
            alert('Error charging teams');
        }
    }
}

export const paginate = (pos) => {
    return async dispatch => {
        try {
            dispatch({
                type:PAGINATE,
                payload: pos
            })
        } catch(err) {
            alert(err);
        }
    }
}

export const filter = team => {
    return async dispatch=> {
        try{
            dispatch({
                type:FILTER,
                payload:team
            })
        } catch(err){
            alert(err);
        }
    }
}