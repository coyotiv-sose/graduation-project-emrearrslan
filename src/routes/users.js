const express = require('express')
const router = express.Router()
const User = require('../models/user')

// create a route handler for getting user list
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})

// create a route handler for a users
router.post('/', async function (req, res, next) {
  const newUser = await User.create({
    name: req.body.name,
    status: req.body.status,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
  })
  res.send(newUser)
})

// create a subscription route handler for a user
router.post('/:id/subscriptions', async function (req, res, next) {
  const athlete = await User.findOne({ name: req.params.id })
  const coach = await User.findOne({ name: req.body.coach })
  athlete.subscribe(coach)
  res.send(athlete)
})
// // create a unsubscription route handler for a user
// router.delete('/:id/subscriptions/:coachId', function (req, res, next) {
//   const athlete = User.list.find(user => user.name === req.params.id)
//   const coach = User.list.find(user => user.name === req.params.coachId)
//   athlete.unsubscribe(coach)
//   res.send(athlete)
// })
// // create a purchase route handler for a user
// router.post('/:id/purchases', function (req, res, next) {
//   const athlete = User.list.find(user => user.name === req.params.id)
//   const course = User.list.find(user => user.name === req.body.course)
//   athlete.purchase(course)
//   res.send(athlete)
// })
// // create a refund route handler for a user
// router.delete('/:id/purchases/:courseId', function (req, res, next) {
//   const athlete = User.list.find(user => user.name === req.params.id)
//   const course = User.list.find(user => user.name === req.params.courseId)
//   athlete.refund(course)
//   res.send(athlete)
// })
// create a route handler for getting user li

module.exports = router
