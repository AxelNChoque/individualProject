import React from "react";
import style from './filters.module.css'

const Filters = ({allTeams, filter, order, filter2}) => {

    const handleTeamChange = event => {
        const selectedTeam = event.target.value;
        filter(selectedTeam);
    };

    const handleOrder = event => {
        const ord = event.target.value;
        order(ord);
    }

    const handleApiChange = event => {
        const selectedDB = event.target.value;
        filter2(selectedDB)
    }

    return(
        <div
            className={style.filterContainer}
        >
            <select
                className={style.filter}
                onChange={handleTeamChange}
            >
                <option value=''>Select filter</option>
                <option
                    value='api'
                >Api</option>
                <option
                    value='db'
                >DB</option>

                    {
                        allTeams.map(team => {
                        return <option key={team} value={team}>{team}</option>
                            })
                    }
            </select>
            <select
                className={style.order}
                onChange={handleOrder}
            >
                <option
                    value=''
                >
                    -
                </option>
                <option
                    value='asc'
                >
                    A-Z
                </option>
                <option
                    value='des'
                >
                    Z-A
                </option>
                <option value="ascDOB">
                    &#8593; DoB
                    </option>
                <option value="descDOB">
                    &#8595; DoB
                    </option>
            </select>

        </div>
    )
}

export default Filters;