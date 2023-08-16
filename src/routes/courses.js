const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const User = require('../models/user')

// create a route handler for getting course list
router.get('/', async function (req, res, next) {
  res.send(await Course.find({ owner: req.body.owner }))
})
//   // find user
//   const user = User.list.find(user => user.name === req.body.owner)
//   // call user create course method
//   const newCourse = user.createCourse(req.body.name, req.body.date, req.body.price)
//   // respond with course
//   res.send(newCourse)
// })
router.post('/', async function (req, res, next) {
  const { name, date, price, owner } = req.body
  const user = await User.findById(owner)
  const course = await user.createCourse(name, date, price)
  res.send(course)
})
module.exports = router
