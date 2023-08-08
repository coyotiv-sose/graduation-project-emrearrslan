const express = require('express')
const router = express.Router()
const User = require('../user.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

// create a new user
router.post('/', function (req, res, next) {
  const newUser = User.create({
    name: req.body.name,
    status: req.body.status,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
  })
  res.send(newUser)
})
router.post('/subscriptions', function (req, res, next) {
  const athlete = User.list.find(user => user.name === req.body.athlete)
  const coach = User.list.find(user => user.name === req.body.coach)
  athlete.subscribe(coach)
  res.send(athlete)
})
module.exports = router
