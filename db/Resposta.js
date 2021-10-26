const Sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('resposta', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta
    .sync({ force: false })
    .then(() => {
        console.log('tabela resposta: criada com sucesso')
    })
    .catch((error) => {
        console.log(`tabela resposta: erro ${error}`)
    })

module.exports = Resposta