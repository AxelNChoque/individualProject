const fs = require('fs');
const axios = require('axios')
const { Drivers, Teams } = require('../db');
const path = require('path');
const apiPath = path.join(__dirname, '../../api/db.json');

const getAllDrivers = async (name) => {
    
    // const response = await axios.get('http://localhost:5000/drivers');
    // const drivers = response.data;
    
    const ApiDrivers = await fs.readFileSync(apiPath, 'utf-8');
    const {drivers} = JSON.parse(ApiDrivers);

    const DbDrivers = await Drivers.findAll({
        include: Teams,
    });

    const AllDrivers = [...DbDrivers,...drivers];


    if(name){
        const lowName = name.toLowerCase();
        const driversFilterDB = DbDrivers.filter(driver => {
            return driver.name.toLowerCase().includes(lowName) || driver.surname.toLowerCase().includes(lowName)
        });
        const driversFilterAPI = drivers.filter(driver => {
            return driver.name.forename.toLowerCase().includes(lowName) || driver.name.surname.toLowerCase().includes(lowName);
        });
        const allFilteredDrivers = [...driversFilterDB,...driversFilterAPI];

        if(!allFilteredDrivers.length){
            throw new Error (`Not driver found with :${name}`);
        }

        const slicedFilteredDrivers = allFilteredDrivers.slice(0,15);

        return slicedFilteredDrivers;
    }

    return AllDrivers;
}

module.exports= {
    getAllDrivers
};