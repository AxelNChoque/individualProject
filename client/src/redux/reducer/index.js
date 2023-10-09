import { REMOVE_DRIVER, ADD_DRIVER, GET_DRIVERS, GET_TEAMS, PAGINATE } from "../actions/actions-types";

let initialState = {
    drivers: [],
    allDrivers: [],
    teams:[],
    currentPage: 1,
};

const rootReducer = (state= initialState, action) => {
    const items = 8;
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
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === 'next' ? nextPage * items : prevPage * items; 

            return({
                ...state,
                drivers: [...state.allDrivers].splice(firstIndex,items),
                currentPage: action.payload === 'next' ? nextPage : prevPage
            })
        default:
            return state;
    }
}

export default rootReducer;