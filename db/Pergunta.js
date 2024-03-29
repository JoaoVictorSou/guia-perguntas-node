const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta
    .sync({force: false})
    .then(() => { console.log('tabela pergunta: criada com sucesso') })
    .catch((error) => { console.log(`tabela pergunta: erro ${error}`) })

module.exports = Pergunta