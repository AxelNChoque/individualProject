const axios = require('axios');
const { Driver , Team } = require('../db');

const getDriverDetail = async (req, res) => {
    try {
        const { id } = req.params;

        const driverDB = await Driver.findByPk(id, {
            include: Team,
        });

        if(driverDB) return res.status(200).json({driverDB});


        const response = await axios.get(`http://localhost:5000/drivers/${id}`);
        const driverAPI = response.data;
        if(driverAPI) {
            res.status(200).json({driverAPI});
        }
        return res.status(400).json({error: 'conductor no encontrado'});
    } catch(error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    getDriverDetail
};