const express = require('express')
const app = express()

//express usando o EJS como renderizador de HTML
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index') //renderiza arquivos html
})

app.listen(3000, (error) => {
    if (error) {
        console.log(`o ocorreu um (ou mais) erro: ${error}`)
    } else {
        console.log('servidor iniciado com sucesso!')
    }
})