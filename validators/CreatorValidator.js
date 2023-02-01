const { check, validationResult } = require('express-validator');

const creatorValidationRules = [
  check('artiste_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Artiste name is required!')
    .isString()
    .withMessage('Artiste name must be a valid string!'),
  check('is_independent')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Are you an independent artiste? please answer this!'),
  check('record_label')
    .trim()
    .not()
    .isEmpty()
    .withMessage('record label is required!')
    .isString()
    .withMessage('record label must be a valid string!')
];

const creatorValidationErrors = (req, res, next) => {
  const result = validationResult(req).array();
  if (result && result.length === 0) 
  {
    return next()
  }
  else{
      const error = result[0].msg;
      res.status(422).json({ success: false, message: error });
  }
}

module.exports = {
    creatorValidationErrors,
    creatorValidationRules
}