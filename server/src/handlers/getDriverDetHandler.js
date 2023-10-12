const { getDriverDetail } = require('../controllers/getDriverDetail');

const getDriverDet = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getDriverDetail(id);
        res.status(200).json(response);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getDriverDet
}