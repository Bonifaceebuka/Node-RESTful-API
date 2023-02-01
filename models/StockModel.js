'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const User = require("./UserModel");
const Product = require("./ProductModel");
const db_connect = require('../config/database');
const Stock = db_connect.define('stock', {
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
created_by:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
product_id:{
    type: DataTypes.INTEGER,
    allowNull:false
},
quantity:{
    type: DataTypes.INTEGER,
    allowNull:false
},
batchId:{
    type: DataTypes.STRING,
    unique:true
}
}, {
  // Other model options go 
  timestamps: true
});

Stock.belongsTo(Product, { foreignKey: { name: 'product_id' } });
Stock.belongsTo(User, { foreignKey: { name: 'created_by' } });

module.exports = Stock;