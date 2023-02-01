const express = require('express');
const router = express.Router();
const {
  addressDetails,
  wallectConnection,
  isAddressValid,
  // isAuthenticated
} = require('../../controllers/AuthController');

const auth = require("../../middlewares/ApiAuthMiddleware");
// const {
//   walletConnectValidationRules,
//   walletConnectValidationErrors
// } = require('../../validators/AddressValidator');

// /* GET details of an address. */
// router.get('/address_details/:address', addressDetails); 
// router.post('/connected_address',walletConnectValidationRules, walletConnectValidationErrors, wallectConnection);
// // router.post('/verify_signature', verifySignature);
// router.get('/is_address_valid/:address', isAddressValid);
// router.get('/loggedIn',auth, isAuthenticated);

module.exports = router;