import { ADD_DRIVER, REMOVE_DRIVER, TEAM_FILTER, ORDER, GET_DRIVERS } from "./actions-types";
import axios from 'axios';

export const addDriver = (id) => {
    const endpoint = `http://localhost:5000/drivers/${id}`;
    return async dispatch => {
        try {
            const response = await axios.get(endpoint, id);
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
            console.log(data);
            return dispatch({
                type:GET_DRIVERS,
                payload: data,
            });
        } catch(error) {
            alert('Error charging drivers');
        }
    }
}