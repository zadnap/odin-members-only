const express = require('express');
const { renderIndex } = require('../controllers/indexController');

const indexRouter = express.Router();

indexRouter.get('/', renderIndex);

module.exports = indexRouter;
