const express = require('express');
const {
  postMember,
  postAdmin,
} = require('../controllers/membershipController');

const membershipRouter = express.Router();

membershipRouter.post('/member', postMember);
membershipRouter.post('/admin', postAdmin);

module.exports = membershipRouter;
