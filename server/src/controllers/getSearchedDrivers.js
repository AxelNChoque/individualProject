const axios = require('axios');
const { Driver } = require('../db');

const getSearchedDrivers = async( req, res) => {
    try {
        const keyword = req.query.name.toLowerCase();
        const apiResponse = await axios.get(`http://localhost:5000/drivers/?name=${keyword}`);
        const dbResponse = await Driver.find(
            {
                name: {
                    $regex: keyword,
                    $options: 'i'
                } 
            }
            ).limit(15);
        const allResponse = [...apiResponse.data, ...dbResponse];
        
        if(limitedResponse.length === 0) {
            res.status(404).json({message: '404 Not Found'});
        } else {
            const limitedResponse = allResponse.splice(0,15);
            res.status(200).json({limitedResponse});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    getSearchedDrivers,
}