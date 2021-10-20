const express = require('express')
const server = express()

//express usando o EJS como renderizador de HTML
server.set('view engine', 'ejs')
server.use(express.static('public')) //pasta que ficarão arquivos utilizados apenas no front

server.get('/', (req, res) => {
    res.render('index') //renderiza arquivos html
})

server.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

server.listen(3000, (error) => {
    if (error) {
        console.log(`o ocorreu um (ou mais) erro: ${error}`)
    } else {
        console.log('servidor iniciado com sucesso!')
    }
})