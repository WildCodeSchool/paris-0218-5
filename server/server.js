const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

// variable convertir les callbacks en promises :
const util = require('util')
const path = require('path')

// fonction pour convertir les callbacks en promises :
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// const categories = require('../mocks/categories.json')
// const restaurants = require('../mocks/restos.json')
const users = require('../mocks/user.json')

const app = express()

// systeme authentification
const secret = 'something unbelievable'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// autorisation
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Origin', request.headers.origin)
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  response.header('Access-Control-Allow-Credentials', 'true') // important
  next()
})

// middleware pour gerer la requete post du formulaire
app.use((request, response, next) => {
  if (request.method !== 'POST' || request.method !== 'PUT') return next()
  let accumulator = ''

  request.on('data', data => {
    accumulator += data
  })
  request.on('end', () => {
    try {
      request.body = JSON.parse(accumulator)
      next()
    } catch (err) {
      next(err)
    }
  })
})

// initialisation gestionnaire de sessions
app.use(session({
  secret,
  saveUninitialized: false,
  resave: true,
  store: new FileStore({ secret })
}))

// login middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, { user: req.session.user, cookie: req.headers.cookie })
  next()
})

// Users (hard coded here but consider it comes from database)
const utilisateur = [
  { login: 'bertrand', password: '123' },
  { login: 'martine', password: 'rosedamour' }
]

// routes
app.get('/', (request, response) => {
  const user = request.session.user || {}
  response.json(user)
})

app.post('/registrer', (request, response, next) => {
  console.log(request.method, request.url, request.body)
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const fileName = `${id}.json`
  const filePath = path.join(__dirname, '../mocks', fileName)

  const content = {
    id: id,
    email: request.body.email,
    password: request.body.password,
    createdAt: Date.now()
  }

  writeFile(filePath, JSON.stringify(content), 'utf8')
    .then(() => response.json('OK'))
    .catch(next)
})

app.get('/restaurants', (request, response) => {
  const filePath = path.join(__dirname, '../mocks/restos.json')
  // promise
  readFile(filePath)
    // traitement de la donnéee
    .then(data => {
      response.header('Content-Type', 'application/json; charset=utf-8')
      response.end(data)
    })
    // gestion de l'erreur
    .catch(err => {
      response.status(404).end('not found')
      // console.log pour éviter une erreur de lint
      console.log(err)
    })
})

app.get('/categories', (request, response) => {
  const filePath2 = path.join(__dirname, '../mocks/categories.json')
  // promise
  readFile(filePath2)
    // traitement de la donnéee
    .then(data => {
      response.header('Content-Type', 'application/json; charset=utf-8')
      response.end(data)
    })
    // gestion de l'erreur
    .catch(err => {
      response.status(404).end('not found')
      // console.log pour éviter une erreur de lint
      console.log(err)
    })
})

app.post('/restaurants', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const filePath = path.join(__dirname, '../mocks/restos.json')

  // 1 Lire le fichier et convertir le buffer en string (utf8)
  readFile(filePath, 'utf8')

    // 2 convertir la string en objet JS

    .then(JSON.parse)
    .then(restos => {
      // 3 ajouter le nouveau bloc en array
      restos.push({
        id: id,
        name: request.body.name,
        location: request.body.location,
        category: request.body.category,
        url: request.body.url,
        budget: request.body.budget,
        description: request.body.description,
        cart: request.body.cart,
        vegetarian: request.body.vegetarian,
        takeAway: request.body.takeAway,
        like: []
      })

      // 4 convertir l'array en string
      const content = JSON.stringify(restos, null, 2)

      // 5 écrire dans le fichier
      return writeFile(filePath, content, 'utf8')
    })

    .then(() => response.end('OK'))

    // le catch permet de montrer l'erreur s'il y en a une
    .catch(next)
})

app.get('/profil/:id', (request, response) => {
  const id = Number(request.params.id)
  const profil = users.find(profil => profil.id === id)
  response.json(profil)
})

app.post('/sign-in', (req, res, next) => {
  // does user exists ?
  const user = utilisateur.find(u => req.body.login === u.login)

  // Error handling
  if (!user) {
    return res.json({ error: 'User not found' })
  }

  if (user.password !== req.body.password) {
    return res.json({ error: 'Wrong password' })
  }

  // else, set the user into the session
  req.session.user = user
  res.json(user)
})

app.get('/sign-out', (req, res, next) => {
  req.session.user = {}

  res.json('ok')
})

app.use((err, req, res, next) => {
  if (err) {
    res.json({ message: err.message })
    console.error(err)
  }

  next(err)
})

// port ecouter
app.listen(3333, () => console.log('jecoute sur le port 3333'))
