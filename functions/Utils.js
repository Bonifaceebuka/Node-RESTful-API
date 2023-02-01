const User = require("../models/UserModel");
const Stock = require("../models/StockModel");

exports.isValidUser = async function (data) {
    if(!isNaN(data)){
     return  await findUserById(data)
    }
    else{
     return await findUserByEmail(data)
    }   
  };

  const findUserByEmail = async function (email){
    try {
        const user = await User.findOne(
          {
            where: { email: email}
          }
        );
        if (user) return true; //User already exists
        return false;
      } catch (error) {
        return null;
      }
  }

  const findUserById = async function (id){
    try {
        const user = await User.findByPk(id);
        if (user) return true; //User already exists
        return false;
      } catch (error) {
        return null;
      }
  }

  exports.isValidStock = async function (batchId){
    try {
        const stock = await Stock.findOne(
          {
            where: { batchId: batchId}
          }
        );
        if (stock) return true; //Stock already exists
        return false;
      } catch (error) {
        return null;
      }
  }