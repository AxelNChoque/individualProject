const { postDriver } = require('../controllers/postDriver');

const postDriverHandler = async (req, res) => {
    try {
        
        const { name, lastname, description, image, nationality, birthdate, teams } = req.body;
        if(!teams || teams.length === 0) {
            res.status(400).json({error: 'Need at least one team'})
        }
        const newDriver = await postDriver(
            name,
            lastname,
            description,
            image,
            nationality,
            birthdate,
            teams,
        );
        console.log(newDriver)
        res.status(201).json(newDriver);

    }catch(error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    postDriverHandler,
}