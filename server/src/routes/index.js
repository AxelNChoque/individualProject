const { Router } = require("express");
const { getDriverDetail } = require('../controllers/getDriverDetail');
const { driversRouter } = require('./AllDrivers');
const { getSearchedDrivers } = require('../controllers/getSearchedDrivers');
const { getTeams } = require('../controllers/getTeams');
const { postDrivers } = require('../controllers/postDrivers');

const router = Router();

router.get('/drivers/:id', getDriverDetail);
router.get('/drivers', driversRouter);
router.get('/drivers?name.forename={name}',getSearchedDrivers);
router.get('/teams',getTeams);
router.post('/post',postDrivers);


module.exports = router;
