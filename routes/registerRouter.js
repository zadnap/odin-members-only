const express = require('express');
const { renderRegister } = require('../controllers/registerController');

const registerRouter = express.Router();

registerRouter.get('/', renderRegister);

module.exports = registerRouter;
