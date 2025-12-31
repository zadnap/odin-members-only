const express = require('express');
const {
  renderLogin,
  handleLoginValidator,
  postLogin,
} = require('../controllers/loginController');
const loginValidator = require('../validators/loginValidator');
const redirectIfAuthenticated = require('../middlewares/redirectIfAuthenticated');

const loginRouter = express.Router();

loginRouter.get('/', redirectIfAuthenticated, renderLogin);
loginRouter.post('/', loginValidator, handleLoginValidator, postLogin);

module.exports = loginRouter;
