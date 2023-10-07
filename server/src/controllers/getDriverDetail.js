const axios = require('axios');
const { Drivers , Teams } = require('../db');

const getDriverDetail = async (id) => {

        const driverDB = await Drivers.findByPk(id, {
            include: Teams,
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