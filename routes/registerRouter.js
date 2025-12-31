const express = require('express');
const {
  renderRegister,
  postRegister,
} = require('../controllers/registerController');
const registerValidator = require('../validators/registerValidator');

const registerRouter = express.Router();

registerRouter.get('/', renderRegister);
registerRouter.post('/', registerValidator, postRegister);

module.exports = registerRouter;
