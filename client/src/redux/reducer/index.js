import { REMOVE_DRIVER, ADD_DRIVER } from "../actions/actions-types";

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
        default:
            return state;
    }
}

export default rootReducer;