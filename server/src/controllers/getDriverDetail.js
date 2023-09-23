const axios = require('axios');

const getDriverDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`http://localhost:5000/drivers/:${id}`);
        const driver = response.data;
        if(!driver) return res.status(400).json({error: 'conductor no encontrado'});
        
    } catch(error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    getDriverDetail
};