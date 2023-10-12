const { Drivers, Teams } = require('../db');


const postDriver = async ( name,
    surname,
    description,
    image,
    nationality,
    dob,
    teams ) => {
        let newDriver;
        if(image === ''){
            newDriver = await Drivers.create({
            name,
            surname,
            description,
            nationality,
            dob
        });
        } else {
            newDriver = await Drivers.create({
            name,
            surname,
            description,
            image,
            nationality,
            dob
        });
        }
        

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