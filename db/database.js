const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', '552210',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection