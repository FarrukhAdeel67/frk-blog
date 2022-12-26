const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('blogs', {
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
    });

    Blog.beforeCreate((blog) => {
        blog.dataValues.createdAt = moment().unix();
        blog.dataValues.updatedAt = moment().unix();
    });
    Blog.beforeUpdate((blog) => {
        blog.dataValues.beforeUpdate = moment().unix();
    });
    return Blog;
}