const { validationResult, matchedData } = require('express-validator');
const { addMessage, getMessages, deleteMessage } = require('../db/queries');

const postMessage = async (req, res) => {
  const errors = validationResult(req);
  const messages = await getMessages();

  if (!errors.isEmpty()) {
    return res.status(400).render('index', {
      messages,
      errors: errors.mapped(),
      oldData: req.body,
    });
  }

  const { title, description } = matchedData(req);
  await addMessage(title, description, req.user.id);

  res.redirect('/');
};

const removeMessage = async (req, res) => {
  const messageId = req.params.id;

  await deleteMessage(messageId);

  res.redirect('/');
};

module.exports = { postMessage, removeMessage };
