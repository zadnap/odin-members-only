const express = require('express');
const {
  postMessage,
  removeMessage,
} = require('../controllers/messageController');
const messageValidator = require('../validators/messageValidator');

const messageRouter = express.Router();

messageRouter.post('/', messageValidator, postMessage);
messageRouter.delete('/:id', removeMessage);

module.exports = messageRouter;
