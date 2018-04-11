const express = require('express')
const categorie1 = require('../mocks/categories.json')
// tableau des categories


const app = express()

// autorisation
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
// routes
app.get('/', (request, response)=> {
    response.send('ok')
})

app.get('/categorie1', (request, response) => {
    response.json(categorie1)
})
app.get('/header', (request, response) => {
    response.json(header)
})
// port ecouter 
app.listen(3333, () => console.log("jecoute sur le port 3333"))