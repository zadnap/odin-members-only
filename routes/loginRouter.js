const express = require('express');
const { renderLogin } = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.get('/', renderLogin);

module.exports = loginRouter;
