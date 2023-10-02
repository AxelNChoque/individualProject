const axios = require('axios');
const { Team } = require('../models/Team');


const getTeams = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/drivers');
        const { data } = response;

        const teams = data.map(driver => driver.teams).join(',');
        const arrayTeams = teams.split(',');
        const uniqueTeamsSet = new Set (arrayTeams);
        const uniqueTeams = [...uniqueTeamsSet];

        await Promise.all(uniqueTeams.map( async (teamName) => {
            const existTeam = await Team.findOne({
                where: {
                    name: teamName
                }
            });
            if(!existTeam){
                await Team.create(
                    {
                        name: teamName
                    }
                )
            }
        }))

        res.status(200).json(uniqueTeams);

    } catch(error) {
        res.status(400).json({error});
    }

}

module.exports = {
    getTeams
}