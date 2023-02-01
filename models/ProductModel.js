'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const db_connect = require('../config/database');
const Address = db_connect.define('product', {
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
    unique:true
},
created_at: DataTypes.DATE,
updated_at: DataTypes.DATE,
}, {
  // Other model options go 
  timestamps: true
});

module.exports = Address;