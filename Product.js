const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Product extends Model {}

Product.init({
    titulo: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'product'
})

module.exports = Product