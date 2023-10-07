const { Router } = require('express');
const { postDriverHandler } = require('../handlers/postDriverHandler');
const postDriverRouter = Router();

postDriverRouter.post('/',postDriverHandler);

module.exports = {
    postDriverRouter
}