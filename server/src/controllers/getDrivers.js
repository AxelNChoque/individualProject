const fs = require('fs');
const axios = require('axios')
const path = require('path');
const apiPath = path.join(__dirname, '../../api/db.json');

const getAllDrivers = async () => {
    
    // const response = await axios.get('http://localhost:5000/drivers');
    // const drivers = response.data;
    const DBdrivers = fs.readFileSync(apiPath, 'utf-8');
    const {drivers} = JSON.parse(DBdrivers);
    console.log(drivers);
    drivers.forEach(driver => {
        if(!driver.image){
            driver.image = 'https://w0.peakpx.com/wallpaper/745/990/HD-wallpaper-charles-leclerc-driver-f1-ferrari-formula-1-pilot-puma-scuderia-ferrari.jpg'
        }
    })

    return drivers;
}

module.exports= {
    getAllDrivers
};