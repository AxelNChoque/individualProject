import React from "react";

const Filters = ({allTeams, onChange}) => {

    const handleTeamChange = (event) => {
        const selectedTeam = event.target.value;
        onChange(selectedTeam);
    };

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
            <select>
                <option>
                    asc**
                </option>
            </select>
        </div>
    )
}

export default Filters;