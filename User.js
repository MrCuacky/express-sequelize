const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database')

class User extends Model {}

User.init({
    userName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User