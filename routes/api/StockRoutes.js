const express = require('express');
const router = express.Router();
const {
  storeStock,
  indexStock,
  showStock
} = require('../../controllers/StockController');
const auth = require("../../middlewares/ApiAuthMiddleware");

const {
  stockValidationRules,
  stockValidationErrors
} = require('../../validators/StockValidator');
 
router.get('/', indexStock);
router.get('/show/:stock_id', showStock);
router.post('/store',auth, stockValidationRules, stockValidationErrors, storeStock);

module.exports = router;