const { updateMembershipStatus } = require('../db/queries');

const postMember = async (req, res) => {
  const { memberCode } = req.body;
  const { id } = req.user;

  console.log(req.user);

  if (memberCode === 'hellfireclub') {
    await updateMembershipStatus(id, 'member');
  }

  res.redirect('/');
};

const postAdmin = async (req, res) => {
  const { adminCode } = req.body;
  const { id } = req.user;

  if (adminCode === 'eddiemunson') {
    await updateMembershipStatus(id, 'admin');
  }

  res.redirect('/');
};

module.exports = { postMember, postAdmin };
