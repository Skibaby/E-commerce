const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const Product = require("./Product")
const Tag = require("./Tag")


class ProductTag extends Model { }

ProductTag.init(
    //  define columns

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Product,
                key: 'id'
            }
        },
        tag_id: {

            type: DataTypes.INTEGER,
            references: {
                model: Tag,
                key: 'id'
            }
        }


    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'producttag',
    }

);


module.exports = ProductTag;