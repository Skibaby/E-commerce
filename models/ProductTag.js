const { Model, dataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class ProductTag extends Model { }

ProductTag.init(
    //  define columns

    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        tag_id: {

            type: dataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }


    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }

);


module.exports = ProductTagTag;