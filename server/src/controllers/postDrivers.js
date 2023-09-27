const axios = require('axios');
const { Team, Driver } = require('../db');


const postDrivers = async ( req, res) => {
    const { name, lastname, description, image, nationality, birthdate, teams } = req.body;
    if(!teams || teams.length === 0) {
        res.status(400).json({error: 'Need at least one team'})
    }

    const newDriver = Driver.create({
        name,
        lastname,
        description,
        image,
        nationality,
        birthdate
    });


}

exports.module = {
    postDrivers,
}