const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db/database')
const Pergunta = require('./db/Pergunta')

connection
    .authenticate()
    .then(() => {
        console.log('conexão feita')
    })
    .catch((error) => {
        console.log(error)
    })

const server = express()
//express usando o EJS como renderizador de HTML
server.set('view engine', 'ejs')
server.use(express.static('public')) //pasta que ficarão arquivos utilizados apenas no front
server.use(bodyParser.urlencoded({ extended: false })) //vai organizar dados de formulário em uma estrutura para o javascript
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.render('index') //renderiza arquivos html
})

server.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

server.post('/salvarpergunta', (req, res) => {
    const titulo = req.body.titulo
    const pergunta = req.body.pergunta

    Pergunta
        .create({
            titulo: titulo,
            descricao: pergunta
        })
        .then(() => {
            res.redirect('/')
        })
})

server.listen(3000, (error) => {
    if (error) {
        console.log(`o ocorreu um (ou mais) erro: ${error}`)
    } else {
        console.log('servidor iniciado com sucesso!')
    }
})