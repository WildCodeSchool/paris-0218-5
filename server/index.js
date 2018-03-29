const express = require('express')

const app = express()

app.get('/', (request,response)=> {
    response.send('ok')
})

app.listen(3333, () => console.log("jecoute sur le port 3333"))