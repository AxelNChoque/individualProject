import { REMOVE_DRIVER, ADD_DRIVER, GET_DRIVERS, GET_TEAMS } from "../actions/actions-types";

let initialState = {
    drivers: [],
    allDrivers: [],
    teams:[],
};

const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_DRIVER: 
            return({
                ...state,
                drivers: action.payload,
                allDrivers: action.payload
            })
        case REMOVE_DRIVER:
            return({
                ...state,
                drivers: action.payload,
                allDrivers: action.payload
            })
        case GET_DRIVERS:
            return({
                ...state,
                drivers: action.payload,
                allDrivers: action.payload
            })
        case GET_TEAMS:
            return({
                ...state,
                teams: action.payload,
            })
        default:
            return state;
    }
}

export default rootReducer;