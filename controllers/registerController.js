const { validationResult, matchedData } = require('express-validator');
const { addUser } = require('../db/queries');
const bcrypt = require('bcryptjs');

const renderRegister = async (req, res) => {
  res.render('register', { oldData: null, errors: null });
};

const postRegister = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('register', {
      oldData: req.body,
      errors: errors.mapped(),
    });
  }

  const { firstName, lastName, username, password } = matchedData(req);
  const hashedPassword = await bcrypt.hash(password, 10);
  await addUser(firstName, lastName, username, hashedPassword);

  res.redirect('/');
};

module.exports = { renderRegister, postRegister };
