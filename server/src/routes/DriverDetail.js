const { Router } = require('express');
const { getDriverDet } = require('../handlers/getDriverDetHandler');
const driverDetRouter = Router();

driverDetRouter.get('/', getDriverDet);

module.exports = {driverDetRouter};