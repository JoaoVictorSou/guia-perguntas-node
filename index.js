const express = require('express')
const server = express()

//express usando o EJS como renderizador de HTML
server.set('view engine', 'ejs')
server.use(express.static('public')) //pasta que ficarão arquivos utilizados apenas no front

server.get('/:name/:lang', (req, res) => {
    const name = req.params.name
    const lang = req.params.lang
    let msg = false

    res.render('index', {
        name: name,
        lang: lang,
        msg: msg
    }) //renderiza arquivos html
})

server.listen(3000, (error) => {
    if (error) {
        console.log(`o ocorreu um (ou mais) erro: ${error}`)
    } else {
        console.log('servidor iniciado com sucesso!')
    }
})