import {
  ADD_DRIVER,
  ORDER,
  GET_DRIVERS,
  GET_TEAMS,
  PAGINATE,
  FILTER,
  DETAIL,
  SEARCH_NAME,
  RENDERTEAMS,
} from "./actions-types";
import axios from "axios";

export const addDriver = (state) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/post/", state);
      const { data } = response;
      dispatch({
        type: ADD_DRIVER,
        payload: data,
      });
    } catch (err) {
      alert(`Error adding driver: ${err}`);
    }
  };
};

export const getDrivers = () => {
  const endpoint = `http://localhost:5000/drivers`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (err) {
      alert(`Error charging drivers: ${err}`);
    }
  };
};

export const getTeams = () => {
  const endpoint = `http://localhost:5000/driversteams`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return dispatch({
        type: GET_TEAMS,
        payload: data,
      });
    } catch (err) {
      alert(`Error charging teams: ${err}`);
    }
  };
};

export const paginate = (pos) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PAGINATE,
        payload: pos,
      });
    } catch (err) {
      alert(err);
    }
  };
};

export const filter = (team) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER,
        payload: team,
      });
    } catch (err) {
      alert(err);
    }
  };
};

export const orderDrivers = (ord) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ORDER,
        payload: ord,
      });
    } catch (err) {
      alert(err);
    }
  };
};

export const detailDriver = (id) => {
  const endpoint = `http://localhost:5000/drivers/`;
  return async (dispatch) => {
    try {
      const response = await axios.get(`${endpoint}${id}`);
      const { data } = response;
      return dispatch({
        type: DETAIL,
        payload: data,
      });
    } catch (err) {
      alert(err);
    }
  };
};
export const searchDriver = (input) => {
  const endpoint = `http://localhost:5000/drivers?name=${input}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return dispatch({
        type: SEARCH_NAME,
        payload: data,
      });
    } catch (err) {
      alert(`Error searching driver: ${err.response.status}`);
    }
  };
};
