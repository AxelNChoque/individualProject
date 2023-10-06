const axios = require('axios');
const { Driver , Team } = require('../db');

const getDriverDetail = async (id) => {

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
}

module.exports = {
    getDriverDetail
};