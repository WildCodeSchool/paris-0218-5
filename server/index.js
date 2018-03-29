const express = require('express')
const categorie1 = require('../mocks/categories.json')

const catego = [categorie1]

const app = express()

app.get('/', (request, response)=> {
    response.send('ok')
})

app.get('/catego', (request, response) => {
    response.json(catego)
})

app.listen(3333, () => console.log("jecoute sur le port 3333"))