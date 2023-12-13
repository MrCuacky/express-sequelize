const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class User extends Model {}

User.init({
    nombre: {
        type: DataTypes.STRING
    },
    puesto: {
        type: DataTypes.STRING
    },
    testimonio: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User