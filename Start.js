const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Start  extends Model {}

Start.init({
    titulo: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    },
    boton: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'start'
})

module.exports = Start