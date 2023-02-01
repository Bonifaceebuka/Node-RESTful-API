const { check, validationResult } = require('express-validator');

const stockValidationRules = [
  check('product_id')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Product ID is required!')
    .isNumeric()
    .withMessage('Product ID must be a valid number!'),
  check('quantity')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Stock quantity is required!')
    .isNumeric()
    .withMessage('Stock quantity must be a valid number!'),
check('batchId')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Stock batchId is required!')
    .isString()
    .withMessage('Stock batchId must be a valid string!')
    .isLength({ min: 9 })
    .withMessage('Stock batchId must at least 9 characters!')
];

const stockValidationErrors = (req, res, next) => {
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
    stockValidationErrors,
    stockValidationRules
}