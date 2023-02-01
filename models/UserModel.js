'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const db_connect = require('../config/database');
const User = db_connect.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Other model options go 
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});

module.exports = User;