const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Course = require('../models/course')
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
  const athlete = await User.findById(req.params.id)
  const coach = await User.findById(req.body.coach)
  await athlete.subscribe(coach)
  res.send(athlete)
})
// create a unsubscription route handler for a user
router.delete('/:id/subscriptions/:coachId', async function (req, res, next) {
  const athlete = await User.findById(req.params.id)
  const coach = await User.findById(req.params.coachId)
  await athlete.unsubscribe(coach)
  res.send(athlete)
})
// create a purchase route handler for a user
router.post('/:id/purchases', async function (req, res, next) {
  const athlete = await User.findById(req.params.id)
  const course = await Course.findById(req.body.course)
  await athlete.purchase(course)
  res.send(athlete)
})
// create a refund route handler for a user
router.delete('/:id/purchases/:courseId', async function (req, res, next) {
  const athlete = await User.findById(req.params.id)
  const course = await Course.findById(req.params.courseId)
  await athlete.refund(course)
  res.send(athlete)
})

module.exports = router
