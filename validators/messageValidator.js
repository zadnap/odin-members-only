const { body } = require('express-validator');

const messageValidator = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage('Title must be between 5 and 100 characters'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .bail()
    .isLength({ min: 5, max: 250 })
    .withMessage('Title must be between 5 and 250 characters'),
];

module.exports = messageValidator;
