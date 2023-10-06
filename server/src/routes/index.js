const { Router } = require("express");
const { driverDetRouter } = require('./DriverDetail');
const { driversRouter } = require('./AllDrivers');
const { getSearchedDrivers } = require('../controllers/getSearchedDrivers');
const { teamsRouter } = require('./Teams');
const { postDrivers } = require('../controllers/postDriver');

const router = Router();

router.use('/drivers/:id',driverDetRouter );
router.use('/drivers', driversRouter);
router.get('/drivers?name.forename={name}',getSearchedDrivers);
router.use('/driversteams',teamsRouter);
router.post('/post',postDrivers);


module.exports = router;
