const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Aboutus extends Model {}

Aboutus.init({
    titulo: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    },
    subtitulo1: {
        type: DataTypes.STRING
    },
    subtitulo2: {
        type: DataTypes.STRING
    },
    subtexto1: {
        type: DataTypes.STRING
    },
    subtexto2: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'aboutus'
})

module.exports = Aboutus