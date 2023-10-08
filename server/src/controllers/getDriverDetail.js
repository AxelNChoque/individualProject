const axios = require('axios');
const { Drivers , Teams } = require('../db');

const getDriverDetail = async (id) => {


        if(!/^\d+$/.test(id)){
            
            const driverDB = await Drivers.findByPk(id, {
                include: Teams,
            });

            if(driverDB) return driverDB;

        }

        const response = await axios.get(`http://localhost:5000/drivers`);
        const driversApi  = response.data;

        const searcherDriver = driversApi.find(driver => Number(driver.id) === Number(id));


        if(searcherDriver) {
            return searcherDriver;
        }
        throw new Error(`Not found driver with id: ${id}`);
}

module.exports = {
    getDriverDetail
};