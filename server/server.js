/* commentaire qui dit a travis de fermer les yeux */
/* eslint-disable no-unused-vars */
const express = require('express')
const categories = require('../mocks/categories.json')
const restaurants = require('../mocks/restos.json')
const users = require('../mocks/user.json')

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
// app.get('/header', (request, response) => {
//   response.json(header)
// })

// app.get('/user', (request, response) => {
//     response.json(request.)
// })
// port ecouter
app.listen(3333, () => console.log('jecoute sur le port 3333'))
