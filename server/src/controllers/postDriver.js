const { Drivers, Teams } = require('../db');


const postDriver = async ( name,
    surname,
    description,
    image,
    nationality,
    birthdate,
    teams ) => {
        const newDriver = await Drivers.create({
            name,
            surname,
            description,
            image,
            nationality,
            birthdate
        });

        teams.forEach(async (team) => {
            const teamsDB = await Teams.findOne({
                where: {
                    name: team
                }
            });
            await newDriver.addTeams(teamsDB);
        })
        return newDriver;
}

module.exports = {
    postDriver,
}