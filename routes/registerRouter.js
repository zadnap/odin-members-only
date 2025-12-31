const express = require('express');
const {
  renderRegister,
  postRegister,
} = require('../controllers/registerController');
const registerValidator = require('../validators/registerValidator');
const redirectIfAuthenticated = require('../middlewares/redirectIfAuthenticated');

const registerRouter = express.Router();

registerRouter.get('/', redirectIfAuthenticated, renderRegister);
registerRouter.post('/', registerValidator, postRegister);

module.exports = registerRouter;
