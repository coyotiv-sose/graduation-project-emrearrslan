const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
// Create userSchema variable with the following properties:
const userSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true },
  name: String,
  date: Date,
  price: Number,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})
// Create a Course class with the following properties:
class Course {
  // create a dynamic create method that will create a new course and add it to the list
}

userSchema.loadClass(Course)
userSchema.plugin(autopopulate)
module.exports = mongoose.model('Course', userSchema)
