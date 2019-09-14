const express = require('express')
const app = express()
const query = require('../queries/index')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/hero/:id', (req, res) => {
  res.send(query.getHeroe(req.params.id))
})
  
app.get('/all', (req, res) => {
  res.json(query.getHeroes())
})

app.get('/top10', (req, res) => {
  res.json(query.getTopTenForce())
})

app.get('/topintelligence', (req, res) => {
  res.json(query.getTopIntelligence())
})

app.get('/topstrength', (req, res) => {
  res.json(query.getTopStrength())
})

app.get('/fastestinhuman', (req, res) => {
  res.json(query.getFastest())
})

app.get('/womeninhumanstrength', (req, res) => {
  res.send(query.getWomenNonHuman())
})

app.get('/speedlackintel', (req, res) => {
  res.send(query.getSpeedIntFilter())
})

module.exports = app