const express = require('express');
const { postLogout } = require('../controllers/logoutController');

const logoutRouter = express.Router();

logoutRouter.post('/', postLogout);

module.exports = logoutRouter;
