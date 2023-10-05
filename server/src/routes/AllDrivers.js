const { Router } = require('express');
const { getDrivers } = require('../handlers/getDrivers');
const driversRouter = Router();

driversRouter.get('/drivers', getDrivers);

module.exports = {driversRouter};