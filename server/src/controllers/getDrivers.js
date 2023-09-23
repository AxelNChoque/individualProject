const axios = require('axios');

const getDrivers = async (req,res) => {
    try {
        const response = await axios.get('http://localhost:5000/drivers');
        const drivers = response.data;

        drivers.forEach(driver => {
            if(!driver.image){
                driver.image = 'https://w0.peakpx.com/wallpaper/745/990/HD-wallpaper-charles-leclerc-driver-f1-ferrari-formula-1-pilot-puma-scuderia-ferrari.jpg'
            }
        })
        res.status(200).json({drivers});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports= {
    getDrivers
};