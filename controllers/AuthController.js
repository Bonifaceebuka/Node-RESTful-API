const User = require("../models/UserModel");
const { jwtConfig: config } = require("../config");
const jwt = require("jsonwebtoken");

const logout = async (request, response) => {
  logout;
};


///Register a newly connected wallet
// const wallectConnection = async (request, response) => {
//   const { address } = request.body;
 
//   ///Find the address in MongoDB addresses collection
//   const userAddress = await Address.findOne({ where: {address: address} });

//   if (!userAddress) {
//       return response
//           .status(400)
//           .json({ error: "Unregistered address!", result: false });
//   }

//   // ////////////////////////////////////////////////////
//     // // Step 4: Create JWT
//     // ////////////////////////////////////////////////////

//     const token = jwt.sign(
//       {
//         id: userAddress.user_id.toString(),
//         address: address,
//       },
//       config.secret,
//       { expiresIn: config.tokenLiveSpan }
//     );

//     return response.status(200).json({
//       success: true,
//       token: `Bearer ${token}`,
//       message: "You are now logged in.",
//     });
// };

module.exports = {
  // addressDetails,
  // wallectConnection,
  // isAddressValid,
};
