const express = require('express');
const { postMessage } = require('../controllers/messageController');
const messageValidator = require('../validators/messageValidator');

const messageRouter = express.Router();

messageRouter.post('/', messageValidator, postMessage);

module.exports = messageRouter;
