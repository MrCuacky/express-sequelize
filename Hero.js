const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Hero extends Model {}

Hero.init({
    titulo: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    },
    boton1: {
        type: DataTypes.STRING
    },
    boton2: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'hero'
})

module.exports = Hero