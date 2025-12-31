const { getMessages } = require('../db/queries');

const renderIndex = async (req, res) => {
  const messages = await getMessages();
  res.render('index', { messages, errors: null, oldData: null });
};

module.exports = { renderIndex };
