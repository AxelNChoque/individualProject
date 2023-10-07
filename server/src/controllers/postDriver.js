const { Drivers } = require('../db');


const postDriver = async ( name,
    lastname,
    description,
    image,
    nationality,
    birthdate,
    teams ) => {
        const newDriver = await Drivers.create({
            name,
            lastname,
            description,
            image,
            nationality,
            birthdate,
            teams,
        });
        return newDriver;
}

module.exports = {
    postDriver,
}