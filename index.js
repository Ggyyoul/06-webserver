const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/hola-mundo', function (req, res) {
  res.send('Helloooo')
})

app.get('*', function (req, res) {
  res.send('Error 404 page not found')
})
app.listen(3000)