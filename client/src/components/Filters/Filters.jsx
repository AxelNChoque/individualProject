import React from "react";

const Filters = ({allTeams, filter, order}) => {

    const handleTeamChange = event => {
        const selectedTeam = event.target.value;
        filter(selectedTeam);
    };

    const handleOrder = event => {
        const ord = event.target.value;
        order(ord);
    }

    return(
        <div>
            <select
                onChange={handleTeamChange}
            >
                <option value=''>Select Team</option>
                    {
                        allTeams.map(team => {
                        return <option key={team} value={team}>{team}</option>
                            })
                    }
            </select>
            <select
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
            </select>
        </div>
    )
}

export default Filters;