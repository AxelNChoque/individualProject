import {
  REMOVE_DRIVER,
  ADD_DRIVER,
  GET_DRIVERS,
  GET_TEAMS,
  PAGINATE,
  FILTER,
  ORDER,
  DETAIL,
  SEARCH_NAME,
} from "../actions/actions-types";

let initialState = {
  drivers: [],
  allDrivers: [],
  teams: [],
  driver: {},
  currentPage: 0,
  searchedDrivers: [],
  filteredDrivers: [],
  filter: false,
  allDriversBackUp: [],
  order: false,
  orderedDrivers: [],
  search: false,
};
const rootReducer = (state = initialState, action) => {
  const items = 9;

  switch (action.type) {
    case ADD_DRIVER:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
      };
    case REMOVE_DRIVER:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
      };
    case GET_DRIVERS:
      const lastDriverIndex = (state.currentPage + 1) * items - 1;
      const firstDriverIndex = lastDriverIndex - items + 1;
      const paginatedDrivers = action.payload.slice(
        firstDriverIndex,
        lastDriverIndex + 1
      );

      return {
        ...state,
        drivers: paginatedDrivers,
        allDrivers: action.payload,
        allDriversBackUp: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        driver: action.payload,
      };
    case SEARCH_NAME:
      const searched = action.payload;

      return {
        ...state,
        drivers: searched.slice(0, items),
        searchedDrivers: searched,
        search: true,
        currentPage: 0,
      };
    case PAGINATE:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next" ? nextPage * items : prevPage * items;

      if (state.search) {
        if (
          action.payload === "next" &&
          firstIndex >= state.searchedDrivers.length
        )
          return state;
        else if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          drivers: [...state.searchedDrivers].splice(firstIndex, items),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        };
      }

      if (state.filter) {
        if (
          action.payload === "next" &&
          firstIndex >= state.filteredDrivers.length
        )
          return state;
        else if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          drivers: [...state.filteredDrivers].splice(firstIndex, items),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        };
      }
      if (state.order) {
        if (
          action.payload === "next" &&
          firstIndex >= state.orderedDrivers.length
        )
          return state;
        else if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          drivers: [...state.orderedDrivers].splice(firstIndex, items),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        };
      }

      if (action.payload === "next" && firstIndex >= state.allDrivers.length)
        return state;
      else if (action.payload === "prev" && prevPage < 0) return state;

      return {
        ...state,
        drivers: [...state.allDrivers].splice(firstIndex, items),
        currentPage: action.payload === "next" ? nextPage : prevPage,
      };
    case FILTER:
      let driverss = [];
      const team = action.payload;
      let filteredDrivers = "";
      if (state.order) {
        driverss = [...state.allDriversBackUp];
        if (team === "")
          return {
            ...state,
            drivers: state.orderedDrivers.slice(0, items),
            filter: false,
            search: false,
            currentPage: 0,
          };
      } else {
        driverss = [...state.allDriversBackUp];
        if (team === "")
          return {
            ...state,
            drivers: state.allDriversBackUp.slice(0, items),
            filter: false,
            search: false,
            currentPage: 0,
          };
      }
      if (team === "db") {
        filteredDrivers = driverss.filter((driver) => {
          if (driver.surname) {
            return driver;
          }
        });
      } else if (team === "api") {
        filteredDrivers = driverss.filter((driver) => {
          if (driver.name.surname) {
            return driver;
          }
        });
      } else {
        filteredDrivers = driverss.filter((driver) => {
          if (driver.Teams) {
            return driver.Teams.some((tea) => tea.name.includes(team));
          } else if (driver.teams !== undefined) {
            const teams = driver.teams.split(", ").map((te) => te.trim());
            return teams.some((te) => te.includes(team));
          }
        });
      }

      return {
        ...state,
        drivers: filteredDrivers.slice(0, items),
        filteredDrivers: filteredDrivers,
        filter: true,
        search: false,
        currentPage: 0,
      };

    case ORDER:
      let allDrivers = [];
      const payload = action.payload;

      if (state.filter) {
        allDrivers = [...state.filteredDrivers];
        if (payload === "")
          return {
            ...state,
            drivers: state.filteredDrivers.slice(0, items),
            allDrivers: state.allDriversBackUp,
            order: false,
            search: false,
          };
      } else {
        allDrivers = [...state.allDrivers];
        if (payload === "")
          return {
            ...state,
            drivers: state.allDriversBackUp.slice(0, items),
            allDrivers: state.allDriversBackUp,
            order: false,
            search: false,
          };
      }

      let ordered = [];

      if (action.payload === "asc") {
        ordered = allDrivers.sort((prev, next) => {
          let prevv;
          let nextt;
          if (prev.name.forename !== undefined) {
            prevv = prev.name.forename;
          } else {
            prevv = prev.name;
          }

          if (next.name.forename !== undefined) {
            nextt = next.name.forename;
          } else {
            nextt = next.name;
          }

          if (prevv.toLowerCase() > nextt.toLowerCase()) return 1;
          if (prevv.toLowerCase() < nextt.toLowerCase()) return -1;
          const prevYear = new Date(prev.dob).getFullYear();
          const nextYear = new Date(next.dob).getFullYear();

          return prevYear - nextYear;
        });
      }
      if (action.payload === "des") {
        ordered = allDrivers.sort((prev, next) => {
          let prevv;
          let nextt;
          if (prev.name.forename !== undefined) {
            prevv = prev.name.forename;
          } else {
            prevv = prev.name;
          }

          if (next.name.forename !== undefined) {
            nextt = next.name.forename;
          } else {
            nextt = next.name;
          }

          if (prevv.toLowerCase() > nextt.toLowerCase()) return -1;
          if (prevv.toLowerCase() < nextt.toLowerCase()) return 1;
          const prevYear = new Date(prev.dob).getFullYear();
          const nextYear = new Date(next.dob).getFullYear();

          return nextYear - prevYear;
        });
      }
      if (action.payload === "ascDOB") {
        ordered = allDrivers.sort((prev, next) => {
          const prevDate = new Date(prev.dob);
          const nextDate = new Date(next.dob);

          if (prevDate.getFullYear() !== nextDate.getFullYear()) {
            return prevDate.getFullYear() - nextDate.getFullYear();
          }

          if (prevDate.getMonth() !== nextDate.getMonth()) {
            return prevDate.getMonth() - nextDate.getMonth();
          }

          return prevDate.getDate() - nextDate.getDate();
        });
      }

      if (action.payload === "descDOB") {
        ordered = allDrivers.sort((prev, next) => {
          const prevDate = new Date(prev.dob);
          const nextDate = new Date(next.dob);

          if (prevDate.getFullYear() !== nextDate.getFullYear()) {
            return nextDate.getFullYear() - prevDate.getFullYear();
          }

          if (prevDate.getMonth() !== nextDate.getMonth()) {
            return nextDate.getMonth() - prevDate.getMonth();
          }

          return nextDate.getDate() - prevDate.getDate();
        });
      }

      return {
        ...state,
        drivers: [...ordered].splice(0, items),
        allDrivers: ordered,
        currentPage: 0,
        order: true,
        orderedDrivers: ordered,
        search: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
