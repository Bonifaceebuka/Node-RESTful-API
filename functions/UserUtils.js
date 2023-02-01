const User = require("../models/UserModel");

exports.isValidUser = async function (data) {
    if(!isNaN(data)){
     return  await findUserByEmail(data)
    }
    else{
     return await findUserById(data)
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