const express = require('express')
const categories = require('../mocks/categories.json')
const restaurants = require('../mocks/restos.json')
const bodyParser = require('body-parser');

const app = express()


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

app.get('/restaurants', (request, response) => {
    response.json(restaurants)
})

app.get('/restaurants/:category', (request, response) => {
    const cat = request.params.category
    const restaurantsCat = restaurants.filter(restaurants => restaurants.category === cat);
    response.json(restaurantsCat)
})

app.get('/categories', (request, response) => {
    response.json(categories)
})
app.get('/header', (request, response) => {
    response.json(header)
})
// port ecouter 
app.listen(3333, () => console.log("jecoute sur le port 3333"))