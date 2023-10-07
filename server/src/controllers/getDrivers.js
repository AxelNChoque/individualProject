const fs = require('fs');
const axios = require('axios')
const { Drivers } = require('../db');
const path = require('path');
const apiPath = path.join(__dirname, '../../api/db.json');

const getAllDrivers = async () => {
    
    // const response = await axios.get('http://localhost:5000/drivers');
    // const drivers = response.data;
    
    const ApiDrivers = await fs.readFileSync(apiPath, 'utf-8');
    const {drivers} = JSON.parse(ApiDrivers);

    const DbDrivers = await Drivers.findAll();

    const AllDrivers = [...DbDrivers,...drivers];
    
    AllDrivers.forEach(driver => {
        if(!driver.image){
            driver.image = 'https://w0.peakpx.com/wallpaper/745/990/HD-wallpaper-charles-leclerc-driver-f1-ferrari-formula-1-pilot-puma-scuderia-ferrari.jpg'
        }
    })

    return AllDrivers;
}

module.exports= {
    getAllDrivers
};