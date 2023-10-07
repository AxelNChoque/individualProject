const { Router } = require("express");
const { driverDetRouter } = require('./DriverDetail');
const { driversRouter } = require('./AllDrivers');
const { teamsRouter } = require('./Teams');
const { postDriverRouter } = require('./PostDriver');

const router = Router();

router.use('/drivers',driverDetRouter );
router.use('/drivers', driversRouter);
router.use('/driversteams',teamsRouter);
router.use('/post',postDriverRouter);


module.exports = router;
