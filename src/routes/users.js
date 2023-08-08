const express = require('express')
const router = express.Router()
const User = require('../user.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// create a new user
router.post('/', function (req, res, next) {
  const newUser = new User('Emre', 'athlete', 27, 80, 180)
  res.send(newUser)
})

module.exports = router
