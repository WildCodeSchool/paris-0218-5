const express = require('express')
const categories = require('../mocks/categories.json')
const restaurants = require('../mocks/restos.json')
// tableau des categories


const app = express()

// autorisation
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
// routes
app.get('/', (request, response) => {
    response.send('ok')
})
app.get('/categories/:title', (request, response) => {
    response.json(request.params.title)
})
app.get('/categories', (request, response) => {
    response.json(categories)
})
app.get('/header', (request, response) => {
    response.json(header)
})
// port ecouter 
app.listen(3333, () => console.log("jecoute sur le port 3333"))