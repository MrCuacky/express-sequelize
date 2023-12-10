const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class Contact extends Model {}

Contact.init({
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'contact'
})

module.exports = Contact