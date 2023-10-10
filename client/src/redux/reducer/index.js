import { REMOVE_DRIVER, ADD_DRIVER, GET_DRIVERS, GET_TEAMS, PAGINATE, FILTER } from "../actions/actions-types";

let initialState = {
    drivers: [],
    allDrivers: [],
    teams:[],
    currentPage: 0,
    lastPage: false,
    filteredDrivers: [],
    filter: false,
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
                const lastDriverIndex = (state.currentPage + 1) * items - 1;
                const firstDriverIndex = lastDriverIndex - items + 1;
                const paginatedDrivers = action.payload.slice(firstDriverIndex, lastDriverIndex + 1);
            
                return {
                    ...state,
                    drivers: paginatedDrivers,
                    allDrivers: action.payload
                };
        case GET_TEAMS:
            return({
                ...state,
                teams: action.payload,
            })
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === 'next' ? nextPage * items : prevPage * items; 
            const last = (firstIndex + items) >= state.allDrivers.length;

            if(state.filteredDrivers)


            return({
                ...state,
                lastPage: last,
                drivers: [...state.allDrivers].splice(firstIndex,items),
                currentPage: action.payload === 'next' ? nextPage : prevPage
            })
        case FILTER:
            const driverss = [...state.allDrivers];
            const team = action.payload;
            if(team === '') return {
                ...state,
                drivers: state.allDrivers.slice(0,items),
                filter: false
            };


                const filteredDrivers = driverss.filter(driver => {
                    if (driver.Teams) {
                        // driver.Teams.filter(tea => {
                        //     return  tea.name.includes(team)
                        //  });
                        return driver.Teams.some(tea => tea.name.includes(team));
                    }else if (driver.teams !== undefined) {
                        // let teams = driver.teams.split(", ").map(team => team.trim());
                        // return teams.filter(te => te.includes(team))
                        const teams = driver.teams.split(", ").map(te => te.trim());
                        return teams.some(te => te.includes(team));
                    }
                    
                });
                console.log(filteredDrivers);
            


            // const filtered = normalizedDrivers.filter(driver =>{
            //     const teamsDriver = driver.teams.filter(tea => tea.includes(team))
            //     if(teamsDriver.length !=== 0){
            //         return true
            //     } else {
            //         return false;
            //     }
            // });

            // const filteredDrivers = state.allDrivers.filter(driver => {
            //     if(driver.teams !== undefined){
            //         return driver.teams.includes(team);
            //     } else if (driver.Teams !== undefined){
            //         const filtDriver = driver.Teams.filter(team => team.name.includes(team));
            //         return filtDriver.length !== 0 ? true : false;
            //     } else {
            //         return false;
            //     }
            // });

            return({
                ...state,
                drivers: filteredDrivers.slice(0,items),
                filteredDrivers: filteredDrivers,
                filter:true,
            })

        default:
            return state;
    }
}

export default rootReducer;