const { json } = require('body-parser')
const cors = require('cors')
const express = require('express')
const massive = require('massive')

const mainController = require('./controllers/mainCtrl')

require('dotenv').config()

const port = process.env.PORT || 3005
const app = express()

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
})

app.get('/api/username', mainController.readProducts)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})