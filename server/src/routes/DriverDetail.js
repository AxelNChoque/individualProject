const { Router } = require('express');
const { getDriverDet } = require('../handlers/getDriverDetHandler');
const driverDetRouter = Router();

driverDetRouter.get('/:id', getDriverDet);

module.exports = {driverDetRouter};