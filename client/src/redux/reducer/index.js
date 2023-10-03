import { REMOVE_DRIVER, ADD_DRIVER, GET_DRIVERS } from "../actions/actions-types";

let initialState = { drivers: [], allDrivers: []};

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
        default:
            return state;
    }
}

export default rootReducer;