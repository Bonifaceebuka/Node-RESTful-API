const { check, validationResult } = require('express-validator');

const productValidationRules = [
  check('product_name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Product name is required!')
    .isString()
    .withMessage('Product name must be a valid string!'),
check('product_description')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Product description is required!')
    .isString()
    .withMessage('Product description must be a valid string!')
];

const productValidationErrors = (req, res, next) => {
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
    productValidationErrors,
    productValidationRules
}