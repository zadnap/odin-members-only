const express = require('express');
const {
  renderLogin,
  handleLoginValidator,
  postLogin,
} = require('../controllers/loginController');
const loginValidator = require('../validators/loginValidator');

const loginRouter = express.Router();

loginRouter.get('/', renderLogin);
loginRouter.post('/', loginValidator, handleLoginValidator, postLogin);

module.exports = loginRouter;
