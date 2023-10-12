import { REMOVE_DRIVER, ADD_DRIVER, GET_DRIVERS, GET_TEAMS, PAGINATE, FILTER, ORDER, DETAIL, SEARCH_NAME } from "../actions/actions-types";

let initialState = {
    drivers: [],
    allDrivers: [],
    teams:[],
    driver:{},
    currentPage: 0,
    searchedDrivers: [],
    filteredDrivers: [],
    filter: false,
    allDriversBackUp: [],
    order: false,
    orderedDrivers: [],
    search:false
};
const rootReducer = (state= initialState, action) => {
    const items = 9;
    
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
                    allDrivers: action.payload,
                    allDriversBackUp: action.payload
                };
        case GET_TEAMS:
            return({
                ...state,
                teams: action.payload,
            })
        case DETAIL:
            return({
                ...state,
                driver: action.payload
            })
        case SEARCH_NAME:
            const searched = action.payload;

            return({
                ...state,
                drivers: searched.slice(0,items),
                searchedDrivers: searched,
                search:true
            })
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const firstIndex = action.payload === "next"? nextPage * items:prevPage * items

            if(state.search) {
                if(action.payload === "next" && firstIndex >= state.searchedDrivers.length) return state
                else if(action.payload === "prev" && prevPage < 0) return state

                return{
                    ...state,
                    drivers: [...state.searchedDrivers].splice(firstIndex,items),
                    currentPage: action.payload === "next"? nextPage : prevPage
                }
            }


            if(state.filter){
                if(action.payload === "next" && firstIndex >= state.filteredDrivers.length) return state
                else if(action.payload === "prev" && prevPage < 0) return state

                return{
                    ...state,
                    drivers: [...state.filteredDrivers].splice(firstIndex,items),
                    currentPage: action.payload === "next"? nextPage : prevPage
                }
            }


            if(action.payload === "next" && firstIndex >= state.allDrivers.length) return state
            else if(action.payload === "prev" && prevPage < 0) return state

            return{
                ...state,
                drivers: [...state.allDrivers].splice(firstIndex,items),
                currentPage: action.payload === "next"? nextPage : prevPage
            }

            // const firstIndex = action.payload === 'next' ? nextPage * items : prevPage * items; 
            

            // if(state.filteredDrivers) {
            //     const last = (firstIndex + items) >= state.filteredDrivers.length;
            //     return({
            //     ...state,
            //     lastPage: last,
            //     drivers: [...state.filteredDrivers].splice(firstIndex,items),
            //     currentPage: action.payload === 'next' ? nextPage : prevPage
            // })
            // }
            // const last = (firstIndex + items) >= state.allDrivers.length;

            // return({
            //     ...state,
            //     lastPage: last,
            //     drivers: [...state.allDrivers].splice(firstIndex,items),
            //     currentPage: action.payload === 'next' ? nextPage : prevPage
            // })
        case FILTER:
            
            let driverss = [];
            const team = action.payload;
            if(state.order){
                driverss = [...state.allDriversBackUp];
                if(team === '') return {
                ...state,
                drivers: state.orderedDrivers.slice(0,items),
                filter: false,
                search:false
            };
            } else {
                driverss = [...state.allDriversBackUp];
                if(team === '') return {
                ...state,
                drivers: state.allDriversBackUp.slice(0,items),
                filter: false,
                search:false
            };
            }


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
                search:false
            })

        case ORDER:
            let allDrivers = [];
            const payload = action.payload;

            if(state.filter) {
                allDrivers= [...state.filteredDrivers];
                if(payload === '') return {
                ...state,
                drivers: state.filteredDrivers.slice(0,items),
                allDrivers: state.allDriversBackUp,
                order:false,
                search:false
            }
            } else {
                allDrivers = [...state.allDrivers];
                if(payload === '') return {
                ...state,
                drivers: state.allDriversBackUp.slice(0,items),
                allDrivers: state.allDriversBackUp,
                order:false,
                search:false
            }}


            let orderByName = [];
            
            

            if(action.payload === "asc"){
                orderByName = allDrivers.sort((prev, next)=>{
                    let prevv;
                    let nextt;
                    if(prev.name.forename !== undefined){
                        prevv = prev.name.forename;
                    } else {
                        prevv = prev.name;
                    }
                    
                    if(next.name.forename !== undefined) {
                        nextt = next.name.forename;
                    } else {
                        nextt = next.name;
                    }
                    
                    if(prevv.toLowerCase() > nextt.toLowerCase()) return 1;
                    if(prevv.toLowerCase() < nextt.toLowerCase()) return -1;
                    return 0;
                })
            }
            if(action.payload === "des"){
                orderByName = allDrivers.sort((prev, next)=>{
                    let prevv;
                    let nextt;
                    if(prev.name.forename !== undefined){
                        prevv = prev.name.forename;
                    } else {
                        prevv = prev.name;
                    }
                    
                    if(next.name.forename !== undefined) {
                        nextt = next.name.forename;
                    } else {
                        nextt = next.name;
                    }
                    
                    if(prevv.toLowerCase() > nextt.toLowerCase()) return -1;
                    if(prevv.toLowerCase() < nextt.toLowerCase()) return +1;
                    return 0;
                })
            }
    
        return{
            ...state,
            drivers:[...orderByName].splice(0, items),
            allDrivers:orderByName,
            currentPage:0,
            order:true,
            orderedDrivers: orderByName,
            search:false
        }






            // console.log(ordOrder);
            // const normDrivers = async () => {
            //     let normalizedDrivers =   await normalizeDrivers(allDriverss);
            //     if(ordOrder === 'asc' ) {
            //         let orderedByName = normalizedDrivers.sort((prev,next) => {
            //             if(prev.name > next.name) return -1;
            //             if(prev.name < next.name) return 1;
            //             const prevYear = new Date(prev.dob).getFullYear();
            //             const nextYear = new Date(next.dob).getFullYear();

            //             return prevYear - nextYear;
            //         })

            //         return({
            //             ...state,
            //             drivers:orderedByName.slice(0,items),
            //             allDrivers: [...state.allDrivers],
            //         })
            //     } else if (ordOrder === 'des') {
            //         let orderedByName = normalizedDrivers.sort((prev,next) => {
            //             if(prev.name > next.name) return 1;
            //             if(prev.name < next.name) return -1;
            //             const prevYear = new Date(prev.dob).getFullYear();
            //             const nextYear = new Date(next.dob).getFullYear();

            //             return prevYear - nextYear;
            //         })
            //         return({
            //             ...state,
            //             drivers:orderedByName.slice(0,items),
            //             allDrivers: [...state.allDrivers],
            //         })
            //     } else {
            //         return ({
            //             ...state,
            //             drivers: [...state.allDrivers]
            //         })
            //     }
                
            // };
            // const orderedDrivers = normDrivers();
                
            // console.log(orderedDrivers)
            

            //     return({...state})

        default:
            return state;
    }
}

export default rootReducer;