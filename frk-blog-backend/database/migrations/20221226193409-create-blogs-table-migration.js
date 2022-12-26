'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
    up: async(queryInterface) => {
        await queryInterface.createTable('blogs', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        })
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('blogs');
    }
};