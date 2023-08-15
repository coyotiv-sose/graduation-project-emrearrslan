const mongoose = require('mongoose')

// Create userSchema variable with the following properties:
const userSchema = new mongoose.Schema({
  owner: String,
  name: String,
  date: Date,
  price: Number,
  participants: [],
})
// Create a Course class with the following properties:
class Course {
  // create a dynamic create method that will create a new course and add it to the list
}

userSchema.loadClass(Course)

module.exports = mongoose.model('Course', userSchema)
