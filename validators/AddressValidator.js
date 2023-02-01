const { check, validationResult } = require('express-validator');

const walletConnectValidationRules = [
  check('address')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Address is required!')
    .isString()
    .withMessage('Address must be a valid string!')
];

const walletConnectValidationErrors = (req, res, next) => {
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
    walletConnectValidationErrors,
    walletConnectValidationRules
}