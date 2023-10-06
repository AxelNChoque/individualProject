const { Router } = require('express');
const { getDrivers } = require('../handlers/getDriversHandler');
const driversRouter = Router();

driversRouter.get('/', getDrivers);

module.exports = {driversRouter};