const express = require('express');
const router = express.Router();
const {
  storeProduct,
  indexProduct,
  showProduct
} = require('../../controllers/ProductController');
const auth = require("../../middlewares/ApiAuthMiddleware");

const {
  productValidationRules,
  productValidationErrors
} = require('../../validators/ProductValidator');
 
router.get('/', indexProduct);
router.get('/show/:product_id', showProduct);
router.post('/store',auth, productValidationRules, productValidationErrors, storeProduct);

module.exports = router;