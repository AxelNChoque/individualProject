const axios = require('axios');
const { Team } = require('../db');


const getTeams = async () => {

    const teamDB = await Team.findAll();

    if(!teamDB.length) {
        
        const response = await axios.get('http://localhost:5000/drivers');
        const { data } = response;
        const teams = data.map(driver => driver.teams).join(',');
        const arrayTeams = teams.split(',');
        const arrTeams = arrayTeams.map(team => team.trim());
        const nonEmptyArrTeams = arrTeams.filter(team => team !== '');
        const uniqueTeamsSet = new Set (nonEmptyArrTeams);
        const uniqueTeams = [...uniqueTeamsSet];

        

        // await Promise.all(uniqueTeams.map( async (teamName) => {
        //     const existTeam = await Team.findOne({
        //         where: {
        //             name: teamName
        //         }
        //     });
        //     if(!existTeam){
        //         await Team.create(
        //             {
        //                 name: teamName
        //             }
        //         )
        //     }
        // }))

        uniqueTeams.forEach(async teamName => {
            await Team.findOrCreate({
                where: {
                    name: teamName
                }
            })
        })
        
    return uniqueTeams;
    }
    return teamDB.map(team => team.name);
}

module.exports = {
    getTeams
}