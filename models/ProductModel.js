'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const db_connect = require('../config/database');
const User = require("./UserModel");
const Product = db_connect.define('product', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
created_by:{
    allowNull: false,
    type: DataTypes.INTEGER,
},
product_name:{
    type: DataTypes.STRING,
    allowNull:false
},
product_description:{
    type: DataTypes.TEXT,
    allowNull:false
}
}, {
  // Other model options go 
  timestamps: true
});

Product.belongsTo(User, { foreignKey: { name: 'created_by' } });
module.exports = Product;